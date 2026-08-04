const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const seoTranslations = {
  en: {
    "receptionist.meta.title": "AI Call Agent & Receptionist | Agent On Demand",
    "receptionist.meta.desc": "Agent On Demand's AI call agent answers calls instantly, books appointments, qualifies leads, and transfers urgent calls — 24/7, in any language. See a demo."
  },
  it: {
    "receptionist.meta.title": "Agente Telefonico AI & Receptionist | Agent On Demand",
    "receptionist.meta.desc": "L'agente telefonico AI di Agent On Demand risponde alle chiamate all'istante, prenota appuntamenti, qualifica i lead e trasferisce le chiamate urgenti 24/7."
  },
  es: {
    "receptionist.meta.title": "Agente de Llamadas de IA y Recepcionista | Agent On Demand",
    "receptionist.meta.desc": "El agente de llamadas de IA de Agent On Demand responde llamadas al instante, programa citas, califica prospectos y transfiere llamadas urgentes 24/7."
  },
  fr: {
    "receptionist.meta.title": "Agent d'Appels IA & Réceptionniste | Agent On Demand",
    "receptionist.meta.desc": "L'agent d'appels IA d'Agent On Demand répond instantanément, réserve des rendez-vous, qualifie les leads et transfère les appels urgents 24/7."
  },
  de: {
    "receptionist.meta.title": "KI-Anruf-Agent & Rezeptionistin | Agent On Demand",
    "receptionist.meta.desc": "Der KI-Anruf-Agent von Agent On Demand beantwortet Anrufe sofort, bucht Termine, qualifiziert Leads und leitet dringende Anrufe weiter – rund um die Uhr."
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
console.log("Successfully added receptionist SEO translations to translations.ts!");
