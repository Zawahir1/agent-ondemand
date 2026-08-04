const fs = require('fs');
const content = fs.readFileSync('c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts', 'utf8');

const regex = /"sandbox\.tab\.[^"]*":\s*"[^"]*"/g;
const matches = content.match(regex);
console.log("sandbox.tab matches:", matches);
