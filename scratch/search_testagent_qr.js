const fs = require('fs');
const content = fs.readFileSync('c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/components/TestAgent.tsx', 'utf8');

const lines = content.split('\n');
lines.forEach((line, index) => {
  if (line.toLowerCase().includes('qr') || line.toLowerCase().includes('qrcode') || line.toLowerCase().includes('call')) {
    if (index > 250 && index < 450) {
      console.log(`Line ${index + 1}: ${line.trim()}`);
    }
  }
});
