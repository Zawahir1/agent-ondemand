const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const targetReplacements = {
  en: {
    "realestate.hero.subtitle": "Qualify Buyers, Answer Property Questions, and Book Viewings 24/7"
  },
  it: {
    "realestate.hero.subtitle": "Qualifica gli acquirenti, rispondi alle domande sugli immobili e prenota visite 24/7"
  },
  es: {
    "realestate.hero.subtitle": "Califica compradores, responde preguntas sobre propiedades y agenda visitas 24/7"
  },
  fr: {
    "realestate.hero.subtitle": "Qualifiez les acheteurs, répondez aux questions sur les biens et planifiez les visites 24/7"
  },
  de: {
    "realestate.hero.subtitle": "Qualifizieren Sie Käufer, beantworten Sie Fragen zu Immobilien und buchen Sie Besichtigungen rund um die Uhr"
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
console.log("Successfully updated realestate subtitle translations across all languages!");
