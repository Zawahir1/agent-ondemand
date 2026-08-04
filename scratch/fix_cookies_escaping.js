const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const welcomeTranslations = {
  en: '"cookies.intro.welcome": \'Agent On Demand ("we," "our," or "us") uses cookies and similar technologies to improve your browsing experience, enhance the functionality of our website and Services, analyze website traffic, and personalize content.\',',
  it: '"cookies.intro.welcome": \'Agent On Demand ("noi", "nostro" o "ci") utilizza i cookie e tecnologie simili per migliorare l\\\'esperienza di navigazione, migliorare la funzionalità del nostro sito web e dei Servizi, analizzare il traffico del sito e personalizzare i contenuti.\',',
  es: '"cookies.intro.welcome": \'Agent On Demand ("nosotros", "nuestro" o "nos") utiliza cookies y tecnologías similares para mejorar su experiencia de navegación, mejorar la funcionalidad de nuestro sitio web y Servicios, analizar el tráfico del sitio y personalizar el contenido.\',',
  fr: '"cookies.intro.welcome": \'Agent On Demand ("nous", "notre" ou "nos") utilise des cookies et des technologies similaires pour améliorer votre expérience de navigation, améliorer les fonctionnalités de notre site Web et de nos Services, analyser le trafic du site et personnaliser le contenu.\',',
  de: '"cookies.intro.welcome": \'Agent On Demand („wir“, „uns“ oder „unser“) verwendet Cookies und ähnliche Technologien, um Ihr Surferlebnis zu verbessern, die Funktionalität unserer Website und Dienste zu verbessern, den Website-Verkehr zu analysieren und Inhalte zu personalisieren.\','
};

const lines = content.split('\n');
let currentLang = '';
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const langMatch = /^\s*"([a-z]{2})":\s*\{/.exec(line);
  if (langMatch) {
    currentLang = langMatch[1];
  }
  if (line.includes('"cookies.intro.welcome":')) {
    if (welcomeTranslations[currentLang]) {
      const indent = line.match(/^\s*/)[0];
      lines[i] = indent + welcomeTranslations[currentLang];
    }
  }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log("Successfully fixed Cookies welcome escaping in translations.ts!");
