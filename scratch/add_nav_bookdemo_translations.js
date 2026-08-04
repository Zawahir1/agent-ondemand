const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const bookDemoTranslations = {
  en: {
    "nav.bookdemo": "Book a Demo"
  },
  it: {
    "nav.bookdemo": "Prenota una demo"
  },
  es: {
    "nav.bookdemo": "Reservar una demo"
  },
  fr: {
    "nav.bookdemo": "Réserver une démo"
  },
  de: {
    "nav.bookdemo": "Demo buchen"
  }
};

for (const [lang, keys] of Object.entries(bookDemoTranslations)) {
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
console.log("Successfully added Navbar Book a Demo translations to translations.ts!");
