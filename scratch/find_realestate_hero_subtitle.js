const fs = require('fs');
const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
const content = fs.readFileSync(filePath, 'utf8');

const regex = /"realestate\.hero\.subtitle":\s*"[^"]*"/g;
const matches = content.match(regex);
console.log("realestate.hero.subtitle matches:", matches);
