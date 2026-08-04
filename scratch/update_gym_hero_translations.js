const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const targetReplacements = {
  en: {
    "gym.hero.titleLine1": "AI Call Agent for",
    "gym.hero.titleGradient": "Fitness Businesses"
  },
  it: {
    "gym.hero.titleLine1": "Agente Telefonico AI per",
    "gym.hero.titleGradient": "il Fitness"
  },
  es: {
    "gym.hero.titleLine1": "Agente de Llamadas de IA para",
    "gym.hero.titleGradient": "Negocios de Fitness"
  },
  fr: {
    "gym.hero.titleLine1": "Agent d'Appels IA pour",
    "gym.hero.titleGradient": "Entreprises de Fitness"
  },
  de: {
    "gym.hero.titleLine1": "KI-Anruf-Agent für",
    "gym.hero.titleGradient": "Fitnessunternehmen"
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
console.log("Successfully updated gym H1 translations across all languages!");
