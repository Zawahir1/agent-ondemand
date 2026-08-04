const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git' && file !== 'scratch') {
        walkDir(filePath, callback);
      }
    } else {
      callback(filePath);
    }
  }
}

const occurrences = [];
walkDir('c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone', (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('vercel.app') || content.includes('artisan-clone')) {
    // find line numbers
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('vercel.app') || lines[i].includes('artisan-clone')) {
        occurrences.push({
          file: filePath,
          line: i + 1,
          content: lines[i].trim()
        });
      }
    }
  }
});

console.log(JSON.stringify(occurrences, null, 2));
