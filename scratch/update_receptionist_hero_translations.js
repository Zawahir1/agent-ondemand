const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const targetReplacements = {
  en: {
    "receptionist.hero.titleLine1": "AI Call Agent & Receptionist —",
    "receptionist.hero.titleGradient": "Never Miss a Call"
  },
  it: {
    "receptionist.hero.titleLine1": "Agente Telefonico AI & Receptionist —",
    "receptionist.hero.titleGradient": "Non Perdere una Chiamata"
  },
  es: {
    "receptionist.hero.titleLine1": "Agente de Llamadas de IA y Recepcionista —",
    "receptionist.hero.titleGradient": "Nunca Pierdas una Llamada"
  },
  fr: {
    "receptionist.hero.titleLine1": "Agent d'Appels IA & Réceptionniste —",
    "receptionist.hero.titleGradient": "Ne Manquez Jamais un Appel"
  },
  de: {
    "receptionist.hero.titleLine1": "KI-Anruf-Agent & Rezeptionistin —",
    "receptionist.hero.titleGradient": "Nie Einen Anruf Verpassen"
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
console.log("Successfully updated receptionist H1 translations across all languages!");
