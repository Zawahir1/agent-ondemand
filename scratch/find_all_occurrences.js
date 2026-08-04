const fs = require('fs');
const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
const content = fs.readFileSync(filePath, 'utf8');

const key = "press.title";
let pos = 0;
while (true) {
  const index = content.indexOf(key, pos);
  if (index === -1) break;
  console.log(`Found '${key}' at index ${index}.`);
  // Let's print the language block it belongs to by looking backwards for language markers like `"en": {` or `"it": {`
  const preceding = content.slice(0, index);
  const enIdx = preceding.lastIndexOf('"en": {');
  const itIdx = preceding.lastIndexOf('"it": {');
  const esIdx = preceding.lastIndexOf('"es": {');
  const frIdx = preceding.lastIndexOf('"fr": {');
  const deIdx = preceding.lastIndexOf('"de": {');
  
  const indices = [
    { lang: 'en', idx: enIdx },
    { lang: 'it', idx: itIdx },
    { lang: 'es', idx: esIdx },
    { lang: 'fr', idx: frIdx },
    { lang: 'de', idx: deIdx }
  ].filter(item => item.idx !== -1).sort((a, b) => b.idx - a.idx);
  
  if (indices.length > 0) {
    console.log(`Belongs to language section: '${indices[0].lang}' (index of section start: ${indices[0].idx})`);
  } else {
    console.log(`Could not find language section!`);
  }
  
  pos = index + key.length;
}
