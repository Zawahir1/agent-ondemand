const fs = require('fs');
const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
const content = fs.readFileSync(filePath, 'utf8');

const key = "press.title";
const index = content.indexOf(key);
if (index !== -1) {
  console.log(`Found key '${key}' at index ${index}. Around it:`);
  console.log(content.slice(Math.max(0, index - 100), index + 100));
} else {
  console.log(`Key '${key}' not found in content!`);
}
