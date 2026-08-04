const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const popupTranslations = {
  en: {
    "cookie.banner.text": "We use cookies to improve your browsing experience, analyze site traffic, and personalize content. Learn more in our Cookie Policy.",
    "cookie.banner.accept": "Accept All",
    "cookie.banner.decline": "Decline",
    "cookie.banner.settings": "Settings",
    "cookie.banner.save": "Save Preferences",
    "cookie.banner.essential.title": "Essential Cookies",
    "cookie.banner.essential.desc": "Required for the website to function properly.",
    "cookie.banner.analytics.title": "Analytics Cookies",
    "cookie.banner.analytics.desc": "Help us understand website traffic and usage.",
    "cookie.banner.marketing.title": "Marketing Cookies",
    "cookie.banner.marketing.desc": "Used to deliver personalized advertisements."
  },
  it: {
    "cookie.banner.text": "Utilizziamo i cookie per migliorare la tua esperienza di navigazione, analizzare il traffico del sito e personalizzare i contenuti. Scopri di più nella nostra Informativa sui Cookie.",
    "cookie.banner.accept": "Accetta Tutto",
    "cookie.banner.decline": "Rifiuta",
    "cookie.banner.settings": "Impostazioni",
    "cookie.banner.save": "Salva Preferenze",
    "cookie.banner.essential.title": "Cookie Essenziali",
    "cookie.banner.essential.desc": "Necessari per il corretto funzionamento del sito.",
    "cookie.banner.analytics.title": "Cookie Statistici",
    "cookie.banner.analytics.desc": "Ci aiutano a capire il traffico e l'uso del sito.",
    "cookie.banner.marketing.title": "Cookie di Marketing",
    "cookie.banner.marketing.desc": "Utilizzati per fornire annunci pubblicitari personalizzati."
  },
  es: {
    "cookie.banner.text": "Utilizamos cookies para mejorar tu experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido. Obtén más información en nuestra Política de Cookies.",
    "cookie.banner.accept": "Aceptar todo",
    "cookie.banner.decline": "Rechazar",
    "cookie.banner.settings": "Configuración",
    "cookie.banner.save": "Guardar preferencias",
    "cookie.banner.essential.title": "Cookies Esenciales",
    "cookie.banner.essential.desc": "Necesarias para que el sitio funcione correctamente.",
    "cookie.banner.analytics.title": "Cookies de Análisis",
    "cookie.banner.analytics.desc": "Nos ayudan a entender el tráfico y uso de la web.",
    "cookie.banner.marketing.title": "Cookies de Marketing",
    "cookie.banner.marketing.desc": "Utilizadas para ofrecer publicidad personalizada."
  },
  fr: {
    "cookie.banner.text": "Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser le trafic du site et personnaliser le contenu. En savoir plus dans notre Politique de Cookies.",
    "cookie.banner.accept": "Tout accepter",
    "cookie.banner.decline": "Refuser",
    "cookie.banner.settings": "Paramètres",
    "cookie.banner.save": "Enregistrer les préférences",
    "cookie.banner.essential.title": "Cookies Essentiels",
    "cookie.banner.essential.desc": "Requis pour le bon fonctionnement du site web.",
    "cookie.banner.analytics.title": "Cookies Analytiques",
    "cookie.banner.analytics.desc": "Aident à comprendre le trafic et l'utilisation du site.",
    "cookie.banner.marketing.title": "Cookies de Marketing",
    "cookie.banner.marketing.desc": "Utilisés pour diffuser des publicités ciblées."
  },
  de: {
    "cookie.banner.text": "Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern, den Website-Verkehr zu analysieren und Inhalte zu personalisieren. Weitere Informationen finden Sie in unserer Cookie-Richtlinie.",
    "cookie.banner.accept": "Alle akzeptieren",
    "cookie.banner.decline": "Ablehnen",
    "cookie.banner.settings": "Einstellungen",
    "cookie.banner.save": "Einstellungen speichern",
    "cookie.banner.essential.title": "Essenziell Cookies",
    "cookie.banner.essential.desc": "Erforderlich für das ordnungsgemäße Funktionieren der Website.",
    "cookie.banner.analytics.title": "Analyse Cookies",
    "cookie.banner.analytics.desc": "Helfen uns, den Website-Verkehr und die Nutzung zu verstehen.",
    "cookie.banner.marketing.title": "Marketing Cookies",
    "cookie.banner.marketing.desc": "Wird verwendet, um personalisierte Werbung anzuzeigen."
  }
};

for (const [lang, keys] of Object.entries(popupTranslations)) {
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
console.log("Successfully added Cookie Consent Popup translations to translations.ts!");
