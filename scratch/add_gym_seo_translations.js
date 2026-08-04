const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const seoTranslations = {
  en: {
    "gym.meta.title": "AI Call Agent for Gyms | Agent On Demand",
    "gym.meta.desc": "Agent On Demand's AI call agent for gyms and fitness studios answers calls, books classes and trials, and captures membership leads 24/7. Book a demo."
  },
  it: {
    "gym.meta.title": "Agente Telefonico AI per Palestre | Agent On Demand",
    "gym.meta.desc": "L'agente telefonico AI di Agent On Demand per palestre e centri fitness risponde alle chiamate, prenota lezioni e prove e cattura lead di iscrizione 24/7."
  },
  es: {
    "gym.meta.title": "Agente de Llamadas de IA para Gimnasios | Agent On Demand",
    "gym.meta.desc": "El agente de llamadas de IA de Agent On Demand para gimnasios responde llamadas, reserva clases y pruebas, y captura clientes potenciales de membresía 24/7."
  },
  fr: {
    "gym.meta.title": "Agent d'Appels Sortants pour Salles de Sport | Agent On Demand",
    "gym.meta.desc": "L'agent d'appels IA d'Agent On Demand pour les salles de sport répond aux appels, réserve les cours et essais, et capture les leads d'adhésion 24/7."
  },
  de: {
    "gym.meta.title": "KI-Anruf-Agent für Fitnessstudios | Agent On Demand",
    "gym.meta.desc": "Der KI-Anruf-Agent von Agent On Demand für Fitnessstudios beantwortet Anrufe, bucht Kurse und Probetrainings und erfasst Mitgliedschafts-Leads 24/7."
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
console.log("Successfully added gym SEO translations to translations.ts!");
