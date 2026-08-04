const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const enterprisePriceTranslations = {
  en: {
    "pricing.plan.enterprise.price": "Custom"
  },
  it: {
    "pricing.plan.enterprise.price": "Personalizzato"
  },
  es: {
    "pricing.plan.enterprise.price": "Personalizado"
  },
  fr: {
    "pricing.plan.enterprise.price": "Sur mesure"
  },
  de: {
    "pricing.plan.enterprise.price": "Individuell"
  }
};

for (const [lang, keys] of Object.entries(enterprisePriceTranslations)) {
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
console.log("Successfully added enterprise price to translations.ts!");
