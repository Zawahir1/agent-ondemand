const fs = require('fs');
const path = require('path');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';

function getFullMissingKeys() {
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
    
    console.log("Total missing keys in it/es/fr/de:", missing.length);
    console.log(JSON.stringify(missing, null, 2));
  } catch (e) {
    console.error(e);
  } finally {
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }
}

getFullMissingKeys();
