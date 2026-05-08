// Script to update the active ticket count in Supabase
import https from 'https';

const SUPABASE_URL = "bmlmxeakyivzwjwemrov.supabase.co";
const SUPABASE_KEY = "sb_publishable_QrZIapvR0-7Cl0joIg4kbA_Xwzon0m0";
const TABLE = "dashboard_content";

function makeRequest(method, path, data = null) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: SUPABASE_URL,
            port: 443,
            path: path,
            method: method,
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`,
                'Content-Type': 'application/json'
            }
        };

        const req = https.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                if (res.statusCode >= 400) {
                    reject(new Error(`HTTP ${res.statusCode}: ${body}`));
                } else {
                    try {
                        const parsed = body ? JSON.parse(body) : null;
                        resolve({ statusCode: res.statusCode, body: parsed });
                    } catch (e) {
                        resolve({ statusCode: res.statusCode, body: null });
                    }
                }
            });
        });

        req.on('error', reject);
        
        if (data) {
            req.write(JSON.stringify(data));
        }
        req.end();
    });
}

async function updateTicketCount() {
    try {
        // First, fetch the current overview data
        console.log("Fetching current overview data...");
        const getRes = await makeRequest('GET', `/rest/v1/${TABLE}?key=eq.overview`);
        
        const data = getRes.body;
        console.log("Current data retrieved");

        if (!data || data.length === 0) {
            throw new Error("No overview data found in Supabase");
        }

        const currentData = data[0].value;
        const updatedData = {
            ...currentData,
            stats: {
                ...currentData.stats,
                tickets: 8
            }
        };

        // Update the data
        console.log("Updating active ticket count to 8...");
        await makeRequest('PATCH', `/rest/v1/${TABLE}?key=eq.overview`, {
            value: updatedData,
            updated_at: new Date().toISOString()
        });
        
        console.log("✓ Successfully updated active ticket count to 8!");
        
    } catch (error) {
        console.error("Error:", error.message);
        process.exit(1);
    }
}

updateTicketCount();
