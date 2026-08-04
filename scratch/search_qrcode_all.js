const fs = require('fs');
const content = fs.readFileSync('c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/components/TestAgent.tsx', 'utf8');

const regex = /QrCode/g;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log(`Found QrCode at index ${match.index}`);
}
