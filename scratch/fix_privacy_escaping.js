const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const welcomeTranslations = {
  en: '"privacy.intro.welcome": \'At Agent On Demand ("Company," "we," "our," or "us"), we are committed to protecting your privacy and safeguarding the information you share with us. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our website, AI voice agents, AI customer support services, and related products and services (collectively, the "Services").\',',
  it: '"privacy.intro.welcome": \'In Agent On Demand ("Società", "noi", "nostro" o "ci"), ci impegniamo a proteggere la tua privacy e a salvaguardare le informazioni che condividi con noi. La presente Informativa sulla Privacy spiega come raccogliamo, utilizziamo, divulghiamo e proteggiamo le tue informazioni quando utilizzi il nostro sito web, gli agenti vocali AI, i servizi di assistenza clienti AI e i prodotti e servizi correlati (collettivamente, i "Servizi").\',',
  es: '"privacy.intro.welcome": \'En Agent On Demand ("Compañía", "nosotros", "nuestro" o "nos"), estamos comprometidos a proteger su privacidad y salvaguardar la información que comparte con nosotros. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando utiliza nuestro sitio web, agentes de voz de IA, servicios de atención al cliente de IA y productos y servicios relacionados (colectivamente, los "Servicios").\',',
  fr: '"privacy.intro.welcome": \'Chez Agent On Demand ("Société", "nous", "notre" ou "nos"), nous nous engageons à protéger votre vie privée et à sauvegarder les informations que vous partagez avec nous. Cette Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre site Web, nos agents vocaux IA, nos services de support client IA et les produits et services associés (collectively, les "Services").\',',
  de: '"privacy.intro.welcome": \'Bei Agent On Demand („Unternehmen“, „wir“, „uns“ oder „unser“) verpflichten wir uns, Ihre Privatsphäre zu schützen und die Informationen zu sichern, die Sie mit uns teilen. Diese Datenschutzerklärung erklärt, wie wir Ihre Informationen erfassen, nutzen, offenlegen und schützen, wenn Sie unsere Website, KI-Sprachagenten, KI-Kundensupportdienste und damit verbundene Produkte und Dienste (zusammen die „Dienste“) nutzen.\','
};

const lines = content.split('\n');
let currentLang = '';
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const langMatch = /^\s*"([a-z]{2})":\s*\{/.exec(line);
  if (langMatch) {
    currentLang = langMatch[1];
  }
  if (line.includes('"privacy.intro.welcome":')) {
    if (welcomeTranslations[currentLang]) {
      const indent = line.match(/^\s*/)[0];
      lines[i] = indent + welcomeTranslations[currentLang];
    }
  }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log("Successfully fixed Privacy welcome escaping in translations.ts!");
