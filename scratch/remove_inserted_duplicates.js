const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

// The language keys are: "en", "it", "es", "fr", "de"
const languages = ["en", "it", "es", "fr", "de"];

for (const lang of languages) {
  const marker = `"${lang}": {`;
  const idx = content.indexOf(marker);
  if (idx !== -1) {
    // Search within the next 400 characters after the marker
    const searchArea = content.slice(idx, idx + 800);
    
    // We want to remove the first occurrence of:
    // "mockup.active": "...",
    // "mockup.customer": "...",
    
    let updatedSearchArea = searchArea;
    
    // Pattern to match "mockup.active": "...", (including whitespace and newline)
    const activeRegex = /\s*"mockup\.active":\s*"[^"]*",?\n?/;
    const customerRegex = /\s*"mockup\.customer":\s*"[^"]*",?\n?/;
    
    updatedSearchArea = updatedSearchArea.replace(activeRegex, '\n');
    updatedSearchArea = updatedSearchArea.replace(customerRegex, '\n');
    
    content = content.slice(0, idx) + updatedSearchArea + content.slice(idx + 800);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully removed the duplicate top keys from translations.ts!");
