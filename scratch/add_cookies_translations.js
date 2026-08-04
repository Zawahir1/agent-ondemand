const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const cookiesTranslations = {
  en: {
    "cookies.title": "Cookie Policy",
    "cookies.subtitle": "Cookie Policy for Agent On Demand",
    "cookies.intro.welcome": "Agent On Demand (\"we,\" \"our,\" or \"us\") uses cookies and similar technologies to improve your browsing experience, enhance the functionality of our website and Services, analyze website traffic, and personalize content.",
    "cookies.intro.agreement": "By continuing to use our website, you consent to our use of cookies as described in this Cookie Policy.",
    "cookies.section.1.title": "What Are Cookies?",
    "cookies.section.1.text": "Cookies are small text files stored on your device when you visit a website. They help websites recognize your browser, remember preferences, and improve performance.",
    "cookies.section.2.title": "Types of Cookies We Use",
    "cookies.section.2.text": "We use the following types of cookies:\n\n• Essential Cookies: Necessary for operation, authentication, and security.\n• Performance and Analytics Cookies: Collect anonymous usage and traffic metrics.\n• Functional Cookies: Save your language, region, and preferences.\n• Marketing Cookies: Deliver targeted advertisements and measure campaign success.",
    "cookies.section.3.title": "Third-Party Cookies",
    "cookies.section.3.text": "Our website may use cookies provided by trusted third parties, including analytics providers, advertising partners, payment processors, and embedded service providers.",
    "cookies.section.4.title": "Managing Cookies",
    "cookies.section.4.text": "Most browsers allow you to control or disable cookies through browser settings. Disabling cookies may affect certain website features and functionality.",
    "cookies.section.5.title": "Changes to This Policy",
    "cookies.section.5.text": "We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated Effective Date.",
    "cookies.section.6.title": "Contact Us",
    "cookies.section.6.text": "For questions regarding this Cookie Policy, contact us at support@agent-ondemand.com or visit https://www.agent-ondemand.com."
  },
  it: {
    "cookies.title": "Informativa sui Cookie",
    "cookies.subtitle": "Informativa sui Cookie per Agent On Demand",
    "cookies.intro.welcome": "Agent On Demand (\"noi\", \"nostro\" o \"ci\") utilizza i cookie e tecnologie simili per migliorare l'esperienza di navigazione, migliorare la funzionalità del nostro sito web e dei Servizi, analizzare il traffico del sito e personalizzare i contenuti.",
    "cookies.intro.agreement": "Continuando a utilizzare il nostro sito web, acconsenti all'uso dei cookie come descritto nella presente Informativa sui Cookie.",
    "cookies.section.1.title": "Cosa sono i cookie?",
    "cookies.section.1.text": "I cookie sono piccoli file di testo memorizzati sul tuo dispositivo quando visiti un sito web. Aiutano i siti web a riconoscere il tuo browser, ricordare le preferenze e migliorare le prestazioni.",
    "cookies.section.2.title": "Tipi di cookie che utilizziamo",
    "cookies.section.2.text": "Utilizziamo i seguenti tipi di cookie:\n\n• Cookie essenziali: necessari per il funzionamento, l'autenticazione e la sicurezza.\n• Cookie di prestazione e analisi: raccolgono metriche anonime sull'utilizzo e sul traffico.\n• Cookie funzionali: salvano la lingua, la regione e le preferenze.\n• Cookie di marketing: forniscono pubblicità mirata e misurano il successo delle campagne.",
    "cookies.section.3.title": "Cookie di terze parti",
    "cookies.section.3.text": "Il nostro sito web può utilizzare cookie forniti da terze parti di fiducia, inclusi fornitori di analisi, partner pubblicitari, elaboratori di pagamento e fornitori di servizi integrati.",
    "cookies.section.4.title": "Gestione dei cookie",
    "cookies.section.4.text": "La maggior parte dei browser consente di controllare o disattivare i cookie tramite le impostazioni del browser. La disattivazione dei cookie può influire su determinate caratteristiche e funzionalità del sito web.",
    "cookies.section.5.title": "Modifiche alla presente Informativa",
    "cookies.section.5.text": "Potremmo aggiornare periodicamente la presente Informativa sui Cookie. Le modifiche saranno pubblicate su questa pagina con una data di efficacia aggiornata.",
    "cookies.section.6.title": "Contattaci",
    "cookies.section.6.text": "Per domande relative alla presente Informativa sui Cookie, contattaci all'indirizzo support@agent-ondemand.com o visita https://www.agent-ondemand.com."
  },
  es: {
    "cookies.title": "Política de Cookies",
    "cookies.subtitle": "Política de Cookies para Agent On Demand",
    "cookies.intro.welcome": "Agent On Demand (\"nosotros\", \"nuestro\" o \"nos\") utiliza cookies y tecnologías similares para mejorar su experiencia de navegación, mejorar la funcionalidad de nuestro sitio web y Servicios, analizar el tráfico del sitio y personalizar el contenido.",
    "cookies.intro.agreement": "Al continuar utilizando nuestro sitio web, usted acepta nuestro uso de cookies como se describe en esta Política de Cookies.",
    "cookies.section.1.title": "¿Qué son las cookies?",
    "cookies.section.1.text": "Las cookies son pequeños archivos de texto almacenados en su dispositivo cuando visita un sitio web. Ayudan a los sitios web a reconocer su navegador, recordar preferencias y mejorar el rendimiento.",
    "cookies.section.2.title": "Tipos de Cookies que Utilizamos",
    "cookies.section.2.text": "Utilizamos los siguientes tipos de cookies:\n\n• Cookies Esenciales: Necesarias para el funcionamiento, autenticación y seguridad.\n• Cookies de Rendimiento y Análisis: Recopilan métricas de uso y tráfico anónimas.\n• Cookies Funcionales: Guardan su idioma, región y preferencias.\n• Cookies de Marketing: Entregan anuncios dirigidos y miden el éxito de las campañas.",
    "cookies.section.3.title": "Cookies de Terceros",
    "cookies.section.3.text": "Nuestro sitio web puede utilizar cookies proporcionadas por terceros de confianza, incluidos proveedores de análisis, socios publicitarios, procesadores de pago y proveedores de servicios integrados.",
    "cookies.section.4.title": "Gestión de Cookies",
    "cookies.section.4.text": "La mayoría de los navegadores le permiten controlar o desactivar las cookies a través de la configuración del navegador. Desactivar las cookies puede afectar ciertas características y funciones del sitio web.",
    "cookies.section.5.title": "Cambios en esta Política",
    "cookies.section.5.text": "Es posible que actualicemos esta Política de Cookies periódicamente. Los cambios se publicarán en esta página con una Fecha de vigencia actualizada.",
    "cookies.section.6.title": "Contáctenos",
    "cookies.section.6.text": "Si tiene preguntas sobre esta Política de Cookies, contáctenos en support@agent-ondemand.com o visite https://www.agent-ondemand.com."
  },
  fr: {
    "cookies.title": "Politique relative aux Cookies",
    "cookies.subtitle": "Politique relative aux Cookies pour Agent On Demand",
    "cookies.intro.welcome": "Agent On Demand (\"nous\", \"notre\" ou \"nos\") utilise des cookies et des technologies similaires pour améliorer votre expérience de navigation, améliorer les fonctionnalités de notre site Web et de nos Services, analyser le trafic du site et personnaliser le contenu.",
    "cookies.intro.agreement": "En continuant à utiliser notre site Web, vous consentez à notre utilisation des cookies telle que décrite dans cette Politique relative aux Cookies.",
    "cookies.section.1.title": "Que sont les cookies ?",
    "cookies.section.1.text": "Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez un site Web. Ils aident les sites Web à reconnaître votre navigateur, à mémoriser vos préférences et à améliorer les performances.",
    "cookies.section.2.title": "Types de cookies que nous utilisons",
    "cookies.section.2.text": "Nous utilisons les types de cookies suivants :\n\n• Cookies Essentiels : Nécessaires au fonctionnement, à l'authentification et à la sécurité.\n• Cookies de Performance et d'Analyse : Collectent des mesures d'utilisation et de trafic anonymes.\n• Cookies Fonctionnels : Enregistrent votre langue, votre région et vos préférences.\n• Cookies Marketing : Diffusent des publicités ciblées et mesurent le succès des campagnes.",
    "cookies.section.3.title": "Cookies de Tiers",
    "cookies.section.3.text": "Notre site Web peut utiliser des cookies fournis par des tiers de confiance, notamment des fournisseurs d'analyses, des partenaires publicitaires, des processeurs de paiement et des fournisseurs de services intégrés.",
    "cookies.section.4.title": "Gestion des cookies",
    "cookies.section.4.text": "La plupart des navigateurs vous permettent de contrôler ou de désactiver les cookies via les paramètres du navigateur. La désactivation des cookies peut affecter certaines caractéristiques et fonctionnalités du site Web.",
    "cookies.section.5.title": "Modifications de cette Politique",
    "cookies.section.5.text": "Nous pouvons mettre à jour cette Politique relative aux Cookies périodiquement. Les modifications seront publiées sur cette page avec une date d'entrée en vigueur mise à jour.",
    "cookies.section.6.title": "Contactez-nous",
    "cookies.section.6.text": "Pour toute question concernant cette Politique relative aux Cookies, contactez-nous à support@agent-ondemand.com ou visitez https://www.agent-ondemand.com."
  },
  de: {
    "cookies.title": "Cookie-Richtlinie",
    "cookies.subtitle": "Cookie-Richtlinie für Agent On Demand",
    "cookies.intro.welcome": "Agent On Demand („wir“, „uns“ oder „unser“) verwendet Cookies und ähnliche Technologien, um Ihr Surferlebnis zu verbessern, die Funktionalität unserer Website und Dienste zu verbessern, den Website-Verkehr zu analysieren und Inhalte zu personalisieren.",
    "cookies.intro.agreement": "Durch die weitere Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß dieser Cookie-Richtlinie zu.",
    "cookies.section.1.title": "Was sind Cookies?",
    "cookies.section.1.text": "Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen. Sie helfen Websites, Ihren Browser zu erkennen, Einstellungen zu speichern und die Leistung zu verbessern.",
    "cookies.section.2.title": "Arten von Cookies, die wir verwenden",
    "cookies.section.2.text": "Wir verwenden die folgenden Arten von Cookies:\n\n• Unverzichtbare Cookies: Notwendig für den Betrieb, die Authentifizierung und die Sicherheit.\n• Leistungs- und Analyse-Cookies: Erfassen anonyme Nutzungs- und Verkehrsdaten.\n• Funktionale Cookies: Speichern Ihre Sprache, Region und Einstellungen.\n• Marketing-Cookies: Liefern zielgerichtete Werbung und messen den Kampagnenerfolg.",
    "cookies.section.3.title": "Cookies von Drittanbietern",
    "cookies.section.3.text": "Unsere Website verwendet möglicherweise Cookies von vertrauenswürdigen Drittanbietern, einschließlich Analyseanbietern, Werbepartnern, Zahlungsabwicklern und Anbietern eingebetteter Dienste.",
    "cookies.section.4.title": "Cookies verwalten",
    "cookies.section.4.text": "Bei den meisten Browsern können Sie Cookies über die Browsereinstellungen steuern oder deaktivieren. Das Deaktivieren von Cookies kann bestimmte Website-Funktionen und -Merkmale beeinträchtigen.",
    "cookies.section.5.title": "Änderungen dieser Richtlinie",
    "cookies.section.5.text": "Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren. Änderungen werden auf dieser Seite mit einem aktualisierten Datum des Inkrafttretens veröffentlicht.",
    "cookies.section.6.title": "Kontakt",
    "cookies.section.6.text": "Bei Fragen zu dieser Cookie-Richtlinie kontaktieren Sie uns unter support@agent-ondemand.com oder besuchen Sie https://www.agent-ondemand.com."
  }
};

for (const [lang, keys] of Object.entries(cookiesTranslations)) {
  const marker = `"${lang}": {`;
  const idx = content.indexOf(marker);
  if (idx !== -1) {
    const insertPos = idx + marker.length;
    let insertion = "\n";
    for (const [k, v] of Object.entries(keys)) {
      // Escape newlines in value
      const escapedVal = v.replace(/\n/g, '\\n');
      insertion += `    "${k}": "${escapedVal}",\n`;
    }
    content = content.slice(0, insertPos) + insertion + content.slice(insertPos);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully added Cookies translations to translations.ts!");
