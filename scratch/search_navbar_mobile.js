const fs = require('fs');
const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/components/Navbar.tsx';
const content = fs.readFileSync(filePath, 'utf8');

const occurrences = [];
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('hidden') || lines[i].includes('block') || lines[i].includes('menu')) {
    occurrences.push(`${i+1}: ${lines[i].trim()}`);
  }
}
console.log(occurrences.slice(0, 30));
