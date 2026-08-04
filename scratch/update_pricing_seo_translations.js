const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const targetReplacements = {
  en: {
    "pricing.meta.title": "AI Call Agent Pricing | Agent On Demand",
    "pricing.meta.desc": "Simple, transparent pricing for our AI call agent — 24/7 call answering, appointment booking, and lead qualification. Plans from $499/mo. Free trial.",
    "pricing.title": "AI Call Agent Pricing — Simple, Transparent Plans"
  },
  it: {
    "pricing.meta.title": "Prezzi dell'Agente Telefonico AI | Agent On Demand",
    "pricing.meta.desc": "Prezzi semplici e trasparenti per il nostro agente telefonico AI: risposta alle chiamate 24/7, prenotazione appuntamenti e qualificazione lead.",
    "pricing.title": "Prezzi dell'Agente Telefonico AI — Piani Semplici e Trasparenti"
  },
  es: {
    "pricing.meta.title": "Precios del Agente de Llamadas de IA | Agent On Demand",
    "pricing.meta.desc": "Precios simples y transparentes para nuestro agente de llamadas de IA: respuesta de llamadas 24/7, programación de citas y calificación de prospectos.",
    "pricing.title": "Precios del Agente de Llamadas de IA — Planes Simples y Transparentes"
  },
  fr: {
    "pricing.meta.title": "Tarifs de l'Agent d'Appels IA | Agent On Demand",
    "pricing.meta.desc": "Tarifs simples et transparents pour notre agent d'appels IA — réponse 24/7, réservation de rendez-vous et qualification des prospects de vente.",
    "pricing.title": "Tarifs de l'Agent d'Appels IA — Plans Simples et Transparents"
  },
  de: {
    "pricing.meta.title": "Preise für den KI-Anruf-Agenten | Agent On Demand",
    "pricing.meta.desc": "Einfache, transparente Preise für unseren KI-Anruf-Agenten – 24/7-Anrufbeantwortung, Terminbuchung und Lead-Qualifizierung.",
    "pricing.title": "Preise für den KI-Anruf-Agenten — Einfache, transparente Pläne"
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

// Write the updated file to apply updates on existing keys first
content = lines.join('\n');

// Now, insert the new meta keys that are not already present
for (const [lang, keys] of Object.entries(targetReplacements)) {
  const newKeys = {};
  newKeys[`${lang}.meta.title`] = keys[`pricing.meta.title`];
  newKeys[`${lang}.meta.desc`] = keys[`pricing.meta.desc`];
  
  const marker = `"${lang}": {`;
  const idx = content.indexOf(marker);
  if (idx !== -1) {
    const insertPos = idx + marker.length;
    let insertion = "\n";
    insertion += `    "pricing.meta.title": "${keys['pricing.meta.title']}",\n`;
    insertion += `    "pricing.meta.desc": "${keys['pricing.meta.desc']}",\n`;
    content = content.slice(0, insertPos) + insertion + content.slice(insertPos);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully updated pricing translations across all languages!");
