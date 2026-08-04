const fs = require('fs');
const path = require('path');

const targetDirs = [
  'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/components',
  'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/app'
];

function checkAll109Keys() {
  const missingValPath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/scratch/en_missing_values.json';
  if (!fs.existsSync(missingValPath)) {
    console.error("Missing keys JSON not found!");
    return;
  }
  
  const missingMap = JSON.parse(fs.readFileSync(missingValPath, 'utf8'));
  const keys = Object.keys(missingMap);
  
  const usage = {};
  keys.forEach(k => usage[k] = []);
  
  function scanDir(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scanDir(fullPath);
      } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
        // Skip translations.ts to avoid self-reference matching
        if (entry.name === 'translations.ts') continue;
        const content = fs.readFileSync(fullPath, 'utf8');
        keys.forEach(key => {
          if (content.includes(key)) {
            usage[key].push(entry.name);
          }
        });
      }
    }
  }
  
  targetDirs.forEach(dir => scanDir(dir));
  
  const unused = [];
  const used = [];
  
  keys.forEach(key => {
    if (usage[key].length === 0) {
      unused.push(key);
    } else {
      used.push({ key, files: usage[key] });
    }
  });
  
  console.log(`Of the 109 keys: ${used.length} are used, ${unused.length} are unused.`);
  console.log("\nUSED KEYS AND THEIR FILES:");
  console.log(JSON.stringify(used, null, 2));
  console.log("\nUNUSED KEYS:");
  console.log(JSON.stringify(unused, null, 2));
}

checkAll109Keys();
