const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const seoTranslations = {
  en: {
    "outbound.meta.title": "AI Call Agent for Outbound Calls | Agent On Demand",
    "outbound.meta.desc": "Agent On Demand's AI call agent proactively follows up on leads, re-engages old contacts, and books appointments through natural outbound calls. Book a demo."
  },
  it: {
    "outbound.meta.title": "Agente Telefonico AI per Chiamate Outbound | Agent On Demand",
    "outbound.meta.desc": "L'agente telefonico AI di Agent On Demand contatta proattivamente i lead, riattiva i vecchi contatti e prenota appuntamenti tramite chiamate outbound naturali."
  },
  es: {
    "outbound.meta.title": "Agente de Llamadas de IA para Outbound | Agent On Demand",
    "outbound.meta.desc": "El agente de llamadas de IA de Agent On Demand contacta proactivamente a los clientes potenciales y agenda citas a través de llamadas de salida naturales."
  },
  fr: {
    "outbound.meta.title": "Agent d'Appels IA pour Appels Sortants | Agent On Demand",
    "outbound.meta.desc": "L'agent d'appels IA d'Agent On Demand contacte proactivement les prospects, réactive les anciens contacts et prend des rendez-vous par appels sortants."
  },
  de: {
    "outbound.meta.title": "KI-Anruf-Agent für Outbound-Anrufe | Agent On Demand",
    "outbound.meta.desc": "Der KI-Anruf-Agent von Agent On Demand kontaktiert proaktiv Leads, reaktiviert Altkontakte und bucht Termine durch natürliche Outbound-Anrufe."
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
console.log("Successfully added outbound SEO translations to translations.ts!");
