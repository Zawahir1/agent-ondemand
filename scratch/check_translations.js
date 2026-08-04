const fs = require('fs');
const path = require('path');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';

function checkTranslations() {
  if (!fs.existsSync(filePath)) {
    console.error("File not found:", filePath);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Clean up content so it's valid JS
  let jsContent = content
    .replace(/export\s+const\s+translations/g, 'const translations')
    .split('\n')
    .filter(line => !line.trim().startsWith('export type'))
    .join('\n');
  
  // Add module.exports
  jsContent += '\nmodule.exports = { translations };\n';
  
  const tempPath = path.join(__dirname, 'temp_translations.js');
  fs.writeFileSync(tempPath, jsContent, 'utf8');
  
  try {
    const { translations } = require(tempPath);
    const langs = Object.keys(translations);
    console.log("Languages found:", langs);
    
    const keyLists = {};
    langs.forEach(lang => {
      keyLists[lang] = Object.keys(translations[lang]);
      console.log(`Language '${lang}' has ${keyLists[lang].length} keys.`);
    });
    
    const enKeys = keyLists['en'] || [];
    const enKeysSet = new Set(enKeys);
    
    let allMatches = true;
    
    langs.forEach(lang => {
      if (lang === 'en') return;
      const langKeys = keyLists[lang] || [];
      const langKeysSet = new Set(langKeys);
      
      const missingInLang = enKeys.filter(k => !langKeysSet.has(k));
      const extraInLang = langKeys.filter(k => !enKeysSet.has(k));
      
      if (missingInLang.length > 0 || extraInLang.length > 0 || enKeys.length !== langKeys.length) {
        allMatches = false;
        console.log(`\n--- Differences for '${lang}' (compared to 'en') ---`);
        console.log(`Key count: en=${enKeys.length}, ${lang}=${langKeys.length}`);
        if (missingInLang.length > 0) {
          console.log(`Missing in '${lang}' (${missingInLang.length} keys):`);
          console.log(JSON.stringify(missingInLang.slice(0, 20), null, 2));
          if (missingInLang.length > 20) console.log("...");
        }
        if (extraInLang.length > 0) {
          console.log(`Extra in '${lang}' (${extraInLang.length} keys):`);
          console.log(JSON.stringify(extraInLang.slice(0, 20), null, 2));
          if (extraInLang.length > 20) console.log("...");
        }
      }
    });
    
    if (allMatches) {
      console.log("\nSUCCESS: All translation languages have the exact same keys and length!");
    } else {
      console.log("\nWARNING: Some translation keys differ or lengths do not match.");
    }
    
  } catch (err) {
    console.error("Failed to parse translations file:", err);
  } finally {
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }
}

checkTranslations();
