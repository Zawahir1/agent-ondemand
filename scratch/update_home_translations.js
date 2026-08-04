const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const targetReplacements = {
  en: {
    "hero.headline.line1": "The AI Call Agent That",
    "hero.headline.gradient": "Never Misses Another Customer Call"
  },
  it: {
    "hero.headline.line1": "L'Agente Telefonico AI Che",
    "hero.headline.gradient": "Non Perde Mai una Chiamata Cliente"
  },
  es: {
    "hero.headline.line1": "El Agente de Llamadas de IA Que",
    "hero.headline.gradient": "Nunca Pierde Otra Llamada de Cliente"
  },
  fr: {
    "hero.headline.line1": "L'Agent d'Appels IA Qui",
    "hero.headline.gradient": "Ne Manque Jamais un Autre Appel Client"
  },
  de: {
    "hero.headline.line1": "Der KI-Anruf-Agent, Der",
    "hero.headline.gradient": "Nie Wieder Einen Kundenanruf Verpasst"
  }
};

const lines = content.split('\n');
let currentLang = '';
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const langMatch = /^\s*"([a-z]{2})":\s*\{/.exec(line);
  if (langMatch) {
    currentLang = langMatch[1];
  }
  if (currentLang && targetReplacements[currentLang]) {
    for (const [k, v] of Object.entries(targetReplacements[currentLang])) {
      const regex = new RegExp(`"${k}":\\s*"[^"]*"`);
      if (regex.test(line)) {
        const indent = line.match(/^\s*/)[0];
        const hasComma = line.trim().endsWith(',');
        lines[i] = `${indent}"${k}": "${v}"${hasComma ? ',' : ''}`;
      }
    }
  }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log("Successfully updated home H1 translations across all languages!");
