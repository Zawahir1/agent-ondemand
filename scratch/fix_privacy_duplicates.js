const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const languages = ["en", "it", "es", "fr", "de"];

for (const lang of languages) {
  const marker = `"${lang}": {`;
  const idx = content.indexOf(marker);
  if (idx !== -1) {
    // Search within the next 800 characters
    const searchArea = content.slice(idx, idx + 800);
    const privacyRegex = /\s*"footer\.links\.legal\.privacy":\s*"[^"]*",?\n?/;
    const updatedSearchArea = searchArea.replace(privacyRegex, '\n');
    content = content.slice(0, idx) + updatedSearchArea + content.slice(idx + 800);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully removed duplicate privacy footer keys!");
