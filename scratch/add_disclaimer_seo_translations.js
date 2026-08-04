const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const seoTranslations = {
  en: {
    "disclaimer.meta.title": "Disclaimer | Agent On Demand",
    "disclaimer.meta.desc": "Legal disclaimer covering the use of information, AI-generated content, and services provided through the Agent On Demand website."
  },
  it: {
    "disclaimer.meta.title": "Esclusione di Responsabilità | Agent On Demand",
    "disclaimer.meta.desc": "Esclusione di responsabilità legale relativa all'uso delle informazioni, dei contenuti generati dall'intelligenza artificiale e dei servizi."
  },
  es: {
    "disclaimer.meta.title": "Descargo de Responsabilidad | Agent On Demand",
    "disclaimer.meta.desc": "Descargo de responsabilidad legal relativo al uso de la información, contenidos de IA y servicios del sitio web."
  },
  fr: {
    "disclaimer.meta.title": "Clause de Non-Responsabilité | Agent On Demand",
    "disclaimer.meta.desc": "Clause de non-responsabilité légale concernant l'utilisation des informations, des contenus générés par l'IA et des services."
  },
  de: {
    "disclaimer.meta.title": "Haftungsausschluss | Agent On Demand",
    "disclaimer.meta.desc": "Rechtlicher Haftungsausschluss für die Nutzung von Informationen, KI-generierten Inhalten und Diensten."
  }
};

for (const [lang, keys] of Object.entries(seoTranslations)) {
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
console.log("Successfully added disclaimer SEO translations to translations.ts!");
