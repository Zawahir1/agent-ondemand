const fs = require('fs');
const content = fs.readFileSync('c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts', 'utf8');

const lines = content.split('\n');
lines.forEach((line, index) => {
  if (line.includes('support@agent')) {
    console.log(`Line ${index + 1}: ${line.trim()}`);
  }
});
