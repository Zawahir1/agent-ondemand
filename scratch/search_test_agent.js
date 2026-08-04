const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/components');
for (const file of files) {
  const content = fs.readFileSync(path.join('c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/components', file), 'utf8');
  if (content.toLowerCase().includes('web') || content.toLowerCase().includes('test')) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].toLowerCase().includes('test') && lines[i].toLowerCase().includes('web')) {
        console.log(`${file}:${i+1}: ${lines[i].trim()}`);
      }
    }
  }
}
