const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const componentFiles = walk('c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/components');
const appFiles = walk('c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/app');
const allFiles = [...componentFiles, ...appFiles];

const exemptions = [
  /className=/i,
  /style=/i,
  /id=/i,
  /href=/i,
  /color=/i,
  /stroke=/i,
  /strokeWidth=/i,
  /width=/i,
  /height=/i,
  /src=/i,
  /type=/i,
  /key=/i,
  /initial=/i,
  /animate=/i,
  /exit=/i,
  /transition=/i,
  /xmlns=/i,
  /viewBox=/i,
  /fill=/i,
  /d=/i,
  /d={/i,
  /cursor=/i,
  /d="[^"]+"/i,
  /className="[^"]+"/i,
  /xmlns="[^"]+"/i,
  /viewBox="[^"]+"/i,
  /stroke="[^"]+"/i,
  /fill="[^"]+"/i,
  /d="[^"]+"/i,
  /name="[^"]+"/i,
  /value="[^"]+"/i,
  /placeholder="[^"]+"/i,
  /t\(/,
];

console.log(`Auditing ${allFiles.length} tsx files for potential hardcoded strings...`);

allFiles.forEach(file => {
  const code = fs.readFileSync(file, 'utf8');
  const lines = code.split('\n');
  lines.forEach((line, index) => {
    // Look for tags containing bare words (excluding brackets and JSX bindings)
    // E.g. >Word< or > Word
    const jsxTextMatch = />([^<{}>"]+)</.exec(line);
    if (jsxTextMatch) {
      const text = jsxTextMatch[1].trim();
      // Ignore if text is purely numbers, symbols, spaces, or template bindings
      if (text && /[a-zA-Z]{2,}/.test(text) && !text.includes('t(') && !text.includes('{') && !text.startsWith('/') && !/^[A-Z0-9_-]+$/.test(text)) {
        console.log(`[JSX BARE TEXT] ${path.basename(file)}:L${index+1} -> "${text}"`);
      }
    }

    // Look for raw attribute values like placeholder="Hello" or label="Name"
    const attrMatch = /(placeholder|label|title|description|text)="([^"]+)"/.exec(line);
    if (attrMatch) {
      const attr = attrMatch[1];
      const val = attrMatch[2];
      if (val && /[a-zA-Z]{2,}/.test(val) && !val.includes('t(') && !val.startsWith('h-') && !val.startsWith('w-')) {
        console.log(`[ATTR RAW TEXT] ${path.basename(file)}:L${index+1} -> ${attr}="${val}"`);
      }
    }
  });
});
console.log("Audit complete.");
