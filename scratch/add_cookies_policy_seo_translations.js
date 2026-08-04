const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const seoTranslations = {
  en: {
    "cookies.policy.meta.title": "Cookie Policy | Agent On Demand",
    "cookies.policy.meta.desc": "See how Agent On Demand uses cookies and similar technologies to operate the website, remember preferences, and analyze traffic."
  },
  it: {
    "cookies.policy.meta.title": "Informativa sui Cookie | Agent On Demand",
    "cookies.policy.meta.desc": "Scopri come Agent On Demand utilizza i cookie e tecnologie simili per far funzionare il sito web, ricordare le preferenze e analizzare il traffico."
  },
  es: {
    "cookies.policy.meta.title": "Política de Cookies | Agent On Demand",
    "cookies.policy.meta.desc": "Vea cómo Agent On Demand utiliza cookies y tecnologías similares para operar el sitio web, recordar preferencias y analizar el tráfico."
  },
  fr: {
    "cookies.policy.meta.title": "Politique relative aux Cookies | Agent On Demand",
    "cookies.policy.meta.desc": "Découvrez comment Agent On Demand utilise les cookies et technologies similaires pour faire fonctionner le site, retenir vos préférences et analyser le trafic."
  },
  de: {
    "cookies.policy.meta.title": "Cookie-Richtlinie | Agent On Demand",
    "cookies.policy.meta.desc": "Erfahren Sie, wie Agent On Demand Cookies und ähnliche Technologien einsetzt, um die Website zu betreiben, Einstellungen zu speichern und den Verkehr zu analysieren."
  }
};

for (const [lang, keys] of Object.entries(seoTranslations)) {
  const marker = `"${lang}": {`;
  const idx = content.indexOf(marker);
  if (idx !== -1) {
    const insertPos = idx + marker.length;
    let insertion = "\n";
    for (const [k, v] of Object.entries(keys)) {
      insertion += `    "${k}": "${v}",\n`;
    }
    content = content.slice(0, insertPos) + insertion + content.slice(insertPos);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully added cookies policy SEO translations to translations.ts!");
