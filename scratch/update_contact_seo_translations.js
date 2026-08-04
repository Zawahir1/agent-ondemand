const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const targetReplacements = {
  en: {
    "contact.meta.title": "Book a Demo | AI Call Agent — Agent On Demand",
    "contact.meta.desc": "See our AI call agent in action. Book a free demo to learn how it answers calls, books appointments, and qualifies leads 24/7.",
    "contact.title": "Book a Demo of Our AI Call Agent",
    "contact.subtext": "See Agent On Demand in action. Our team will walk you through how our AI call agent can transform your business communications.",
    "contact.expect.item1": "Live demo of Agent On Demand building a real assistant"
  },
  it: {
    "contact.meta.title": "Prenota una Demo | Agente Telefonico AI — Agent On Demand",
    "contact.meta.desc": "Vedi il nostro agente telefonico AI in azione. Prenota una demo gratuita per scoprire come risponde alle chiamate, prenota appuntamenti e qualifica i lead 24/7.",
    "contact.title": "Prenota una Demo del Nostro Agente Telefonico AI",
    "contact.subtext": "Vedi Agent On Demand in azione. Il nostro team ti spiegherà come il nostro agente telefonico AI può trasformare le comunicazioni aziendali.",
    "contact.expect.item1": "Demo live di Agent On Demand che crea un vero assistente"
  },
  es: {
    "contact.meta.title": "Reservar una Demo | Agente de Llamadas de IA — Agent On Demand",
    "contact.meta.desc": "Vea a nuestro agente de llamadas de IA en acción. Reserve una demo gratuita para aprender cómo responde llamadas, agenda citas y califica prospectos 24/7.",
    "contact.title": "Reserve una Demo de Nuestro Agente de Llamadas de IA",
    "contact.subtext": "Vea Agent On Demand en acción. Nuestro equipo le mostrará cómo nuestro agente de llamadas de IA puede transformar las comunicaciones de su empresa.",
    "contact.expect.item1": "Demostración en vivo de Agent On Demand creando un asistente real"
  },
  fr: {
    "contact.meta.title": "Réserver une Démo | Agent d'Appels IA — Agent On Demand",
    "contact.meta.desc": "Découvrez notre agent d'appels IA en action. Réservez une démo gratuite pour apprendre comment il répond aux appels, prend les rendez-vous et qualifie les leads 24/7.",
    "contact.title": "Réservez une Démo de Notre Agent d'Appels IA",
    "contact.subtext": "Découvrez Agent On Demand en action. Notre équipe vous expliquera comment notre agent d'appels IA peut transformer les communications de votre entreprise.",
    "contact.expect.item1": "Démo en direct d'Agent On Demand créant un véritable assistant"
  },
  de: {
    "contact.meta.title": "Demo Buchen | KI-Anruf-Agent — Agent On Demand",
    "contact.meta.desc": "Erleben Sie unseren KI-Anruf-Agenten in Aktion. Buchen Sie eine kostenlose Demo, um zu erfahren, wie er Anrufe beantwortet, Termine bucht und Leads qualifiziert.",
    "contact.title": "Buchen Sie eine Demo Unseres KI-Anruf-Agenten",
    "contact.subtext": "Erleben Sie Agent On Demand in Aktion. Unser Team zeigt Ihnen, wie unser KI-Anruf-Agent Ihre Geschäftskommunikation transformieren kann.",
    "contact.expect.item1": "Live-Demo von Agent On Demand beim Erstellen eines echten Assistenten"
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

// Write updated lines first
content = lines.join('\n');

// Now, insert the new meta keys that are not already present
for (const [lang, keys] of Object.entries(targetReplacements)) {
  const marker = `"${lang}": {`;
  const idx = content.indexOf(marker);
  if (idx !== -1) {
    const insertPos = idx + marker.length;
    let insertion = "\n";
    insertion += `    "contact.meta.title": "${keys['contact.meta.title']}",\n`;
    insertion += `    "contact.meta.desc": "${keys['contact.meta.desc']}",\n`;
    content = content.slice(0, insertPos) + insertion + content.slice(insertPos);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully updated contact translations across all languages!");
