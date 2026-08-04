const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const targetReplacements = {
  en: {
    "outbound.hero.titleLine1": "AI Call Agent for",
    "outbound.hero.titleGradient": "Outbound Calling"
  },
  it: {
    "outbound.hero.titleLine1": "Agente Telefonico AI per",
    "outbound.hero.titleGradient": "Chiamate Outbound"
  },
  es: {
    "outbound.hero.titleLine1": "Agente de Llamadas de IA para",
    "outbound.hero.titleGradient": "Outbound Calling"
  },
  fr: {
    "outbound.hero.titleLine1": "Agent d'Appels IA pour",
    "outbound.hero.titleGradient": "Appels Sortants"
  },
  de: {
    "outbound.hero.titleLine1": "KI-Anruf-Agent für",
    "outbound.hero.titleGradient": "Outbound-Anrufe"
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
console.log("Successfully updated outbound H1 translations across all languages!");
