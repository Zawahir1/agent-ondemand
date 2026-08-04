const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const placeholderTranslations = {
  en: {
    "contact.form.placeholder.challenge": "We struggle with..."
  },
  it: {
    "contact.form.placeholder.challenge": "Abbiamo difficoltà con..."
  },
  es: {
    "contact.form.placeholder.challenge": "Tenemos dificultades con..."
  },
  fr: {
    "contact.form.placeholder.challenge": "Nous avons des difficultés avec..."
  },
  de: {
    "contact.form.placeholder.challenge": "Wir haben Schwierigkeiten mit..."
  }
};

for (const [lang, keys] of Object.entries(placeholderTranslations)) {
  const marker = `"${lang}": {`;
  const idx = content.indexOf(marker);
  if (idx !== -1) {
    const insertPos = idx + marker.length;
    let insertion = "\n";
    for (const [k, v] of Object.entries(keys)) {
      insertion += `    "${k}": "${v}",\n`;
    }
    content = content.slice(0, insertPos) + insertion + content.slice(insertPos);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully added contact placeholder to translations.ts!");
