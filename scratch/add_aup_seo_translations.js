const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const seoTranslations = {
  en: {
    "aup.meta.title": "Acceptable Use Policy (AUP) | Agent On Demand",
    "aup.meta.desc": "Agent On Demand's Acceptable Use Policy defines permitted and prohibited uses of our AI call agent and calling platform."
  },
  it: {
    "aup.meta.title": "Politica di Uso Accettabile (AUP) | Agent On Demand",
    "aup.meta.desc": "La Politica di Uso Accettabile (AUP) di Agent On Demand definisce gli usi consentiti e vietati della nostra piattaforma di chiamate AI."
  },
  es: {
    "aup.meta.title": "Política de Uso Aceptable (AUP) | Agent On Demand",
    "aup.meta.desc": "La Política de Uso Aceptable (AUP) de Agent On Demand define los usos permitidos y prohibidos de nuestro agente de llamadas de IA."
  },
  fr: {
    "aup.meta.title": "Politique d'Utilisation Acceptable (AUP) | Agent On Demand",
    "aup.meta.desc": "La Politique d'Utilisation Acceptable (AUP) d'Agent On Demand définit les utilisations autorisées et interdites de notre agent d'appels IA."
  },
  de: {
    "aup.meta.title": "Nutzungsbedingungen / Acceptable Use Policy (AUP) | Agent On Demand",
    "aup.meta.desc": "Die Acceptable Use Policy (AUP) von Agent On Demand regelt die zulässige und unzulässige Nutzung unseres KI-Anruf-Agenten."
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
console.log("Successfully added aup SEO translations to translations.ts!");
