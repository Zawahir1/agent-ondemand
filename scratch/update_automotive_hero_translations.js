const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const targetReplacements = {
  en: {
    "automotive.hero.titleLine1": "AI Call Agent for",
    "automotive.hero.titleGradient": "Automotive Businesses"
  },
  it: {
    "automotive.hero.titleLine1": "Agente Telefonico AI per",
    "automotive.hero.titleGradient": "le Imprese Automotive"
  },
  es: {
    "automotive.hero.titleLine1": "Agente de Llamadas de IA para",
    "automotive.hero.titleGradient": "Empresas de Automoción"
  },
  fr: {
    "automotive.hero.titleLine1": "Agent d'Appels IA pour",
    "automotive.hero.titleGradient": "Entreprises de l'Automobile"
  },
  de: {
    "automotive.hero.titleLine1": "KI-Anruf-Agent für",
    "automotive.hero.titleGradient": "Automobilunternehmen"
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
console.log("Successfully updated automotive H1 translations across all languages!");
