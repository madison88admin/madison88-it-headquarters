/**
 * Netlify Function: ITSM API Proxy
 *
 * Proxies requests from /api-itsm/* → http://5.223.78.194:3011/api/*
 * Bypasses CORS by making the request server-side.
 */

const ITSM_BASE = "http://5.223.78.194:3011";

exports.handler = async (event) => {
  // Build the target URL: strip /api-itsm prefix, prepend /api
  const rawPath = event.path || "/";
  const apiPath = rawPath.replace(/^\/api-itsm/, "/api") || "/api";
  const qs = event.rawQuery ? `?${event.rawQuery}` : "";
  const targetUrl = `${ITSM_BASE}${apiPath}${qs}`;

  // Forward relevant headers
  const forwardHeaders = {};
  const hopByHop = new Set([
    "host", "connection", "keep-alive", "transfer-encoding",
    "te", "trailer", "upgrade", "proxy-authorization", "proxy-authenticate"
  ]);

  for (const [key, value] of Object.entries(event.headers || {})) {
    if (!hopByHop.has(key.toLowerCase())) {
      forwardHeaders[key] = value;
    }
  }

  // Override host to match the target
  forwardHeaders.host = new URL(ITSM_BASE).host;

  try {
    const fetchOptions = {
      method: event.httpMethod,
      headers: forwardHeaders,
    };

    // Forward body for non-GET/HEAD requests
    if (event.body && !["GET", "HEAD"].includes(event.httpMethod)) {
      fetchOptions.body = event.isBase64Encoded
        ? Buffer.from(event.body, "base64").toString("utf-8")
        : event.body;
    }

    const response = await fetch(targetUrl, fetchOptions);

    // Read response
    const contentType = response.headers.get("content-type") || "";
    let body;
    let isBase64 = false;

    if (contentType.includes("text") || contentType.includes("json")) {
      body = await response.text();
    } else {
      // Binary response
      const buffer = Buffer.from(await response.arrayBuffer());
      body = buffer.toString("base64");
      isBase64 = true;
    }

    // Build response headers with CORS for the browser
    const responseHeaders = {
      "Access-Control-Allow-Origin": "https://m88-it-headquarters.netlify.app",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
      "Access-Control-Max-Age": "86400",
      "Content-Type": contentType || "application/json",
    };

    // Handle CORS preflight
    if (event.httpMethod === "OPTIONS") {
      return {
        statusCode: 204,
        headers: responseHeaders,
        body: "",
      };
    }

    return {
      statusCode: response.status,
      headers: responseHeaders,
      body,
      isBase64Encoded: isBase64,
    };
  } catch (error) {
    console.error("ITSM proxy error:", error.message);
    return {
      statusCode: 502,
      headers: {
        "Access-Control-Allow-Origin": "https://m88-it-headquarters.netlify.app",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "error",
        message: "ITSM backend unreachable",
        detail: error.message,
      }),
    };
  }
};
