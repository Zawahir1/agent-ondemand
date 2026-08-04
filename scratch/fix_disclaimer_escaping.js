const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const welcomeTranslations = {
  en: '"disclaimer.intro.welcome": \'The information, software, AI-generated content, voice responses, automation, and Services provided by Agent On Demand are offered on an "as is" and "as available" basis.\',',
  it: '"disclaimer.intro.welcome": \'Le informazioni, il software, i contenuti generati dall\\\'AI, le risposte vocali, l\\\'automazione e i Servizi forniti da Agent On Demand sono offerti "così come sono" e "come disponibili".\',',
  es: '"disclaimer.intro.welcome": \'La información, el software, el contenido generado por IA, las respuestas de voz, la automatización y los Servicios proporcionados por Agent On Demand se ofrecen "tal cual" y "según disponibilidad".\',',
  fr: '"disclaimer.intro.welcome": \'Les informations, logiciels, contenus générés par l\\\'IA, réponses vocales, automatisations et Services fournis par Agent On Demand sont proposés "en l\\\'état" et "selon disponibilité".\',',
  de: '"disclaimer.intro.welcome": \'Die von Agent On Demand bereitgestellten Informationen, Software, KI-generierten Inhalte, Sprachantworten, Automatisierungen und Dienste werden ohne Mängelgewähr ("as is") und nach Verfügbarkeit ("as available") bereitgestellt.\','
};

const lines = content.split('\n');
let currentLang = '';
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const langMatch = /^\s*"([a-z]{2})":\s*\{/.exec(line);
  if (langMatch) {
    currentLang = langMatch[1];
  }
  if (line.includes('"disclaimer.intro.welcome":')) {
    if (welcomeTranslations[currentLang]) {
      const indent = line.match(/^\s*/)[0];
      lines[i] = indent + welcomeTranslations[currentLang];
    }
  }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log("Successfully fixed Disclaimer welcome escaping in translations.ts!");
