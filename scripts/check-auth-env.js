
const fs = require('fs');
const path = require('path');

// Try to load .env.local
const envPath = path.join(__dirname, '..', '.env.local');
let envContent = '';

try {
    envContent = fs.readFileSync(envPath, 'utf8');
} catch (e) {
    console.error('❌ Could not read .env.local');
    process.exit(1);
}

// Simple parser
const env = {};
envContent.split('\n').forEach(line => {
    const [key, ...values] = line.split('=');
    if (key && values) {
        env[key.trim()] = values.join('=').trim();
    }
});

const requiredVars = [
    'AUTH_GOOGLE_ID',
    'AUTH_GOOGLE_SECRET',
    'AUTH_SECRET',
    'API_BASE_URL' // Used in auth.ts callback
];

console.log('Checking Frontend Auth Configuration...');
let allValid = true;

requiredVars.forEach(varName => {
    if (!env[varName]) {
        console.error(`❌ Missing: ${varName}`);
        allValid = false;
    } else {
        console.log(`✅ ${varName}: Set`);
    }
});

if (allValid) {
    console.log('\nSUCCESS: Frontend Auth config is present.');
} else {
    console.log('\nFAILURE: Missing Frontend Auth keys. Login will fail.');
}
