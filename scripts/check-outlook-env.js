
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
    'AUTH_MICROSOFT_ENTRA_ID_ID',
    'AUTH_MICROSOFT_ENTRA_ID_SECRET',
    'AUTH_MICROSOFT_ENTRA_ID_TENANT_ID',
];

console.log('Checking Outlook/Microsoft Auth Configuration...');
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
    console.log('\nSUCCESS: Microsoft Auth config is present.');
} else {
    console.log('\nFAILURE: Missing Microsoft Auth keys.');
}
