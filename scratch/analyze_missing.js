const fs = require('fs');
const path = require('path');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';

function analyzeMissingKeys() {
  const content = fs.readFileSync(filePath, 'utf8');
  let jsContent = content
    .replace(/export\s+const\s+translations/g, 'const translations')
    .split('\n')
    .filter(line => !line.trim().startsWith('export type'))
    .join('\n');
  
  jsContent += '\nmodule.exports = { translations };\n';
  
  const tempPath = path.join(__dirname, 'temp_translations.js');
  fs.writeFileSync(tempPath, jsContent, 'utf8');
  
  try {
    const { translations } = require(tempPath);
    const enKeys = Object.keys(translations.en);
    const itKeys = new Set(Object.keys(translations.it));
    const missing = enKeys.filter(k => !itKeys.has(k));
    
    // Group keys by prefix
    const groups = {};
    missing.forEach(key => {
      const parts = key.split('.');
      const prefix = parts[0] + (parts[1] && isNaN(parts[1]) ? '.' + parts[1] : '');
      groups[prefix] = (groups[prefix] || 0) + 1;
    });
    
    console.log("Missing keys grouped by prefix:");
    console.log(JSON.stringify(groups, null, 2));
    
  } catch (e) {
    console.error(e);
  } finally {
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }
}

analyzeMissingKeys();
