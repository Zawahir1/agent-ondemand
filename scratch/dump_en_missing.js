const fs = require('fs');
const path = require('path');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';

function dumpEnKeys() {
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
    
    const missingMap = {};
    missing.forEach(key => {
      missingMap[key] = translations.en[key];
    });
    
    fs.writeFileSync('c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/scratch/en_missing_values.json', JSON.stringify(missingMap, null, 2), 'utf8');
    console.log("Dumped English values to scratch/en_missing_values.json successfully!");
  } catch (e) {
    console.error(e);
  } finally {
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }
}

dumpEnKeys();
