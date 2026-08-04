const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const seoTranslations = {
  en: {
    "automotive.meta.title": "AI Call Agent for Automotive | Agent On Demand",
    "automotive.meta.desc": "Agent On Demand's AI call agent for dealerships and service centers books service appointments, qualifies sales leads, and answers calls 24/7. Book a demo."
  },
  it: {
    "automotive.meta.title": "Agente Telefonico AI per l'Automotive | Agent On Demand",
    "automotive.meta.desc": "L'agente telefonico AI di Agent On Demand per concessionarie e centri assistenza prenota appuntamenti di manutenzione, qualifica lead di vendita e risponde 24/7."
  },
  es: {
    "automotive.meta.title": "Agente de Llamadas de IA para Automoción | Agent On Demand",
    "automotive.meta.desc": "El agente de llamadas de IA de Agent On Demand para concesionarios y talleres reserva citas de servicio, califica prospectos de ventas y responde 24/7."
  },
  fr: {
    "automotive.meta.title": "Agent d'Appels IA pour l'Automobile | Agent On Demand",
    "automotive.meta.desc": "L'agent d'appels IA d'Agent On Demand pour concessionnaires et centres auto réserve les rendez-vous d'atelier, qualifie les leads et répond 24/7."
  },
  de: {
    "automotive.meta.title": "KI-Anruf-Agent für die Automobilbranche | Agent On Demand",
    "automotive.meta.desc": "Der KI-Anruf-Agent von Agent On Demand für Autohäuser und Werkstätten bucht Service-Termine, qualifiziert Verkaufs-Leads und beantwortet Anrufe 24/7."
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
console.log("Successfully added automotive SEO translations to translations.ts!");
