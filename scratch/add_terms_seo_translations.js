const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const seoTranslations = {
  en: {
    "terms.meta.title": "Terms and Conditions | Agent On Demand",
    "terms.meta.desc": "Read the Terms and Conditions governing use of Agent On Demand's AI call agent, outbound calling, and related services."
  },
  it: {
    "terms.meta.title": "Termini e Condizioni | Agent On Demand",
    "terms.meta.desc": "Leggi i Termini e le Condizioni che regolano l'uso dell'agente telefonico AI di Agent On Demand e dei servizi correlati."
  },
  es: {
    "terms.meta.title": "Términos y Condiciones | Agent On Demand",
    "terms.meta.desc": "Lea los Términos y Condiciones que regulan el uso del agente de llamadas de IA de Agent On Demand y servicios relacionados."
  },
  fr: {
    "terms.meta.title": "Conditions Générales | Agent On Demand",
    "terms.meta.desc": "Lisez les Conditions Générales régissant l'utilisation de l'agent d'appels IA d'Agent On Demand et des services associés."
  },
  de: {
    "terms.meta.title": "Allgemeine Geschäftsbedingungen (AGB) | Agent On Demand",
    "terms.meta.desc": "Lesen Sie die Allgemeinen Geschäftsbedingungen (AGB) für die Nutzung des KI-Anruf-Agenten von Agent On Demand."
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
console.log("Successfully added terms SEO translations to translations.ts!");
