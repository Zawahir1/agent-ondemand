const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const seoTranslations = {
  en: {
    "privacy.meta.title": "Privacy Policy | Agent On Demand",
    "privacy.meta.desc": "Learn how Agent On Demand's AI call agent collects, uses, and protects personal data from website visitors, callers, and customers."
  },
  it: {
    "privacy.meta.title": "Informativa sulla Privacy | Agent On Demand",
    "privacy.meta.desc": "Scopri come l'agente telefonico AI di Agent On Demand raccoglie, utilizza e protegge i dati personali dei visitatori del sito, dei chiamanti e dei clienti."
  },
  es: {
    "privacy.meta.title": "Política de Privacidad | Agent On Demand",
    "privacy.meta.desc": "Conozca cómo el agente de llamadas de IA de Agent On Demand recopila, utiliza y protege los datos personales de visitantes del sitio, llamadas y clientes."
  },
  fr: {
    "privacy.meta.title": "Politique de Confidentialité | Agent On Demand",
    "privacy.meta.desc": "Découvrez comment l'agent d'appels IA d'Agent On Demand collecte, utilise et protège les données personnelles des visiteurs du site, des appelants et des clients."
  },
  de: {
    "privacy.meta.title": "Datenschutzerklärung | Agent On Demand",
    "privacy.meta.desc": "Erfahren Sie, wie der KI-Anruf-Agent von Agent On Demand personenbezogene Daten von Website-Besuchern, Anrufern und Kunden erhebt, nutzt und schützt."
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
console.log("Successfully added privacy SEO translations to translations.ts!");
