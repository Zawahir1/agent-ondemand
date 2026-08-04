const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const contactTranslations = {
  en: {
    "nav.contact": "Contact Us"
  },
  it: {
    "nav.contact": "Contattaci"
  },
  es: {
    "nav.contact": "Contáctanos"
  },
  fr: {
    "nav.contact": "Contactez-nous"
  },
  de: {
    "nav.contact": "Kontakt"
  }
};

for (const [lang, keys] of Object.entries(contactTranslations)) {
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
console.log("Successfully added Navbar Contact Us translations to translations.ts!");
