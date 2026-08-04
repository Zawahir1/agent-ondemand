const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const welcomeTranslations = {
  en: '"terms.intro.welcome": \'Welcome to Agent On Demand ("Company," "we," "our," or "us"). These Terms and Conditions ("Terms") govern your access to and use of our website, AI voice agents, AI chat agents, automation tools, software platform, APIs, and related services (collectively, the "Services").\',',
  it: '"terms.intro.welcome": \'Benvenuto su Agent On Demand ("Società", "noi", "nostro" o "ci"). I presenti Termini e Condizioni ("Termini") disciplinano l\\\'accesso e l\\\'uso del nostro sito web, degli agenti vocali AI, degli agenti di chat AI, degli strumenti di automazione, della piattaforma software, delle API e dei relativi servizi (collettivamente, i "Servizi").\',',
  es: '"terms.intro.welcome": \'Bienvenido a Agent On Demand ("Compañía", "nosotros", "nuestro" o "nos"). Estos Términos y Condiciones ("Términos") rigen su acceso y uso de nuestro sitio web, agentes de voz de IA, agentes de chat de IA, herramientas de automatización, plataforma de software, API y servicios relacionados (colectivamente, los "Servicios").\',',
  fr: '"terms.intro.welcome": \'Bienvenue sur Agent On Demand ("Société", "nous", "notre" ou "nos"). Les présentes Conditions Générales ("Conditions") régissent votre accès et votre utilisation de notre site Web, de nos agents vocaux IA, de nos agents de chat IA, de nos outils d\\\'automatisation, de notre plateforme logicielle, de nos API et des services associés (collectivement, les "Services").\',',
  de: '"terms.intro.welcome": \'Willkommen bei Agent On Demand („Unternehmen“, „wir“, „uns“ oder „unser“). Diese Allgemeinen Geschäftsbedingungen („Bedingungen“) regeln Ihren Zugriff auf und Ihre Nutzung unserer Website, KI-Sprachagenten, KI-Chat-Agenten, Automatisierungstools, Softwareplattformen, APIs und damit verbundene Dienste (zusammen die „Dienste“).\','
};

const lines = content.split('\n');
let currentLang = '';
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const langMatch = /^\s*"([a-z]{2})":\s*\{/.exec(line);
  if (langMatch) {
    currentLang = langMatch[1];
  }
  if (line.includes('"terms.intro.welcome":')) {
    if (welcomeTranslations[currentLang]) {
      const indent = line.match(/^\s*/)[0];
      lines[i] = indent + welcomeTranslations[currentLang];
    }
  }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log("Successfully fixed Terms welcome escaping in translations.ts!");
