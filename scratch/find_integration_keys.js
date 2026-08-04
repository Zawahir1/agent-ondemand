const fs = require('fs');
const path = require('path');

const targetDirs = [
  'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/components',
  'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/app'
];

const keysToSearch = [
  "integration.gtm.title",
  "integration.gtm.desc",
  "integration.replace.title",
  "integration.replace.desc",
  "integration.after.enrich",
  "integration.after.signals",
  "integration.after.data",
  "integration.after.outreach",
  "integration.after.booking"
];

function findKeyUsage() {
  const matches = {};
  keysToSearch.forEach(k => matches[k] = []);
  
  function scanDir(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scanDir(fullPath);
      } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        keysToSearch.forEach(key => {
          if (content.includes(key)) {
            matches[key].push(fullPath);
          }
        });
      }
    }
  }
  
  targetDirs.forEach(dir => scanDir(dir));
  console.log("Usage of integration keys in codebase:");
  console.log(JSON.stringify(matches, null, 2));
}

findKeyUsage();
