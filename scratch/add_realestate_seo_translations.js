const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const seoTranslations = {
  en: {
    "realestate.meta.title": "AI Call Agent for Real Estate | Agent On Demand",
    "realestate.meta.desc": "Agent On Demand's AI call agent for real estate answers buyer and seller calls, qualifies leads by budget, and books viewings automatically. Book a demo."
  },
  it: {
    "realestate.meta.title": "Agente Telefonico AI per l'Immobiliare | Agent On Demand",
    "realestate.meta.desc": "L'agente telefonico AI di Agent On Demand per l'immobiliare risponde alle chiamate di acquirenti e venditori, qualifica i lead per budget e prenota visite."
  },
  es: {
    "realestate.meta.title": "Agente de Llamadas de IA para Bienes Raíces | Agent On Demand",
    "realestate.meta.desc": "El agente de llamadas de IA de Agent On Demand para bienes raíces responde llamadas de compradores y vendedores, califica prospectos por presupuesto y agenda visitas."
  },
  fr: {
    "realestate.meta.title": "Agent d'Appels IA pour l'Immobilier | Agent On Demand",
    "realestate.meta.desc": "L'agent d'appels IA d'Agent On Demand pour l'immobilier répond aux appels des acheteurs et vendeurs, qualifie les leads par budget et planifie des visites."
  },
  de: {
    "realestate.meta.title": "KI-Anruf-Agent für Immobilien | Agent On Demand",
    "realestate.meta.desc": "Der KI-Anruf-Agent von Agent On Demand für Immobilien beantwortet Käufer- und Verkäuferanrufe, qualifiziert Leads nach Budget und bucht Besichtigungen."
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
console.log("Successfully added realestate SEO translations to translations.ts!");
