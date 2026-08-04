const fs = require('fs');
const content = fs.readFileSync('c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/app/outbound/page.tsx', 'utf8');

const lines = content.split('\n');
lines.forEach((line, index) => {
  if (line.includes('receptionist') || line.includes('realestate') || line.includes('automotive') || line.includes('gym')) {
    console.log(`Line ${index + 1}: ${line.trim()}`);
  }
});
