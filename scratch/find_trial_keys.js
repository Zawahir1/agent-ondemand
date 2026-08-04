const fs = require('fs');
const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
const content = fs.readFileSync(filePath, 'utf8');

const regex = /"[^"]*":\s*"[^"]*trial[^"]*"/gi;
const matches = content.match(regex);
console.log("Found matches containing trial:", matches ? matches.slice(0, 30) : "none");
