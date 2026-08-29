/**
 * Netlify Function: ITSM API Proxy with Server-Side Auth
 *
 * Proxies requests from /api-itsm/* → http://5.223.78.194:3011/api/*
 * Handles authentication server-side so the browser never needs ITSM credentials.
 * Bypasses CORS by making all requests from the server.
 *
 * Environment variables needed in Netlify:
 *   ITSM_EMAIL    – ITSM login email
 *   ITSM_PASSWORD  – ITSM login password
 */

const ITSM_BASE = "http://5.223.78.194:3011";

// In-memory token cache (per function instance, resets on cold start)
let cachedToken = null;
let tokenExpiresAt = 0;
const TOKEN_TTL_MS = 30 * 60 * 1000; // 30 minutes

async function loginToItsm() {
  const email = process.env.ITSM_EMAIL || "";
  const password = process.env.ITSM_PASSWORD || "";

  if (!email || !password) {
    throw new Error("ITSM_EMAIL and ITSM_PASSWORD environment variables are not set in Netlify");
  }

  const response = await fetch(`${ITSM_BASE}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`ITSM login failed (${response.status}): ${body}`);
  }

  const payload = await response.json();
  const token = payload?.token || payload?.data?.token || payload?.data?.access_token;

  if (!token) {
    throw new Error("ITSM login succeeded but no token found in response");
  }

  cachedToken = token;
  tokenExpiresAt = Date.now() + TOKEN_TTL_MS;
  console.log("✅ ITSM server-side login successful");
  return token;
}

async function getItsmToken() {
  if (cachedToken && Date.now() < tokenExpiresAt) {
    return cachedToken;
  }
  return loginToItsm();
}

exports.handler = async (event) => {
  // CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: corsHeaders(),
      body: "",
    };
  }

  try {
    const rawPath = event.path || "/";
    const apiPath = rawPath.replace(/^\/api-itsm/, "/api") || "/api";
    const qs = event.rawQuery ? `?${event.rawQuery}` : "";
    const targetUrl = `${ITSM_BASE}${apiPath}${qs}`;

    // Get a valid token (auto-login if needed)
    let token = await getItsmToken();

    // Build headers — forward client headers but add auth
    const forwardHeaders = buildForwardHeaders(event.headers);
    forwardHeaders["Authorization"] = `Bearer ${token}`;
    forwardHeaders["Accept"] = "application/json";

    let fetchOptions = {
      method: event.httpMethod,
      headers: forwardHeaders,
    };

    if (event.body && !["GET", "HEAD"].includes(event.httpMethod)) {
      fetchOptions.body = event.isBase64Encoded
        ? Buffer.from(event.body, "base64").toString("utf-8")
        : event.body;
    }

    let response = await fetch(targetUrl, fetchOptions);

    // If 401, re-login and retry once
    if (response.status === 401) {
      console.log("Token expired, re-authenticating...");
      token = await loginToItsm();
      forwardHeaders["Authorization"] = `Bearer ${token}`;
      fetchOptions = { ...fetchOptions, headers: forwardHeaders };
      response = await fetch(targetUrl, fetchOptions);
    }

    return buildResponse(response);
  } catch (error) {
    console.error("ITSM proxy error:", error.message);
    return {
      statusCode: 502,
      headers: { ...corsHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify({
        status: "error",
        message: "ITSM backend unreachable or auth failed",
        detail: error.message,
      }),
    };
  }
};

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
    "Access-Control-Max-Age": "86400",
  };
}

function buildForwardHeaders(clientHeaders) {
  const hopByHop = new Set([
    "host", "connection", "keep-alive", "transfer-encoding",
    "te", "trailer", "upgrade", "proxy-authorization", "proxy-authenticate",
  ]);
  const forward = {};
  for (const [key, value] of Object.entries(clientHeaders || {})) {
    if (!hopByHop.has(key.toLowerCase()) && key.toLowerCase() !== "authorization") {
      forward[key] = value;
    }
  }
  forward.host = new URL(ITSM_BASE).host;
  return forward;
}

async function buildResponse(response) {
  const contentType = response.headers.get("content-type") || "";
  let body;
  let isBase64 = false;

  if (contentType.includes("text") || contentType.includes("json")) {
    body = await response.text();
  } else {
    const buffer = Buffer.from(await response.arrayBuffer());
    body = buffer.toString("base64");
    isBase64 = true;
  }

  return {
    statusCode: response.status,
    headers: {
      ...corsHeaders(),
      "Content-Type": contentType || "application/json",
    },
    body,
    isBase64Encoded: isBase64,
  };
}
