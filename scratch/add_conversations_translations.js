const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const conversationsTranslations = {
  en: {
    "mockup.system.calendarRules": "Calendar Rules Applied",
    "mockup.system.businessHours": "Business Hours Verified",
    "mockup.system.smartEscalation": "Smart Escalation Route",
    "mockup.activeCall": "Active Call",
    "mockup.aiReceptionistAgent": "AI Receptionist Agent",
    "mockup.liveAudioStream": "Live Audio Stream",
    "mockup.caller": "Caller",
    "mockup.agentName": "Agent On Demand"
  },
  it: {
    "mockup.system.calendarRules": "Regole calendario applicate",
    "mockup.system.businessHours": "Orario di lavoro verificato",
    "mockup.system.smartEscalation": "Percorso di escalation intelligente",
    "mockup.activeCall": "Chiamata attiva",
    "mockup.aiReceptionistAgent": "Agente di ricezione IA",
    "mockup.liveAudioStream": "Flusso audio dal vivo",
    "mockup.caller": "Chiamante",
    "mockup.agentName": "Agent On Demand"
  },
  es: {
    "mockup.system.calendarRules": "Reglas de calendario aplicadas",
    "mockup.system.businessHours": "Horario comercial verificado",
    "mockup.system.smartEscalation": "Ruta de escalada inteligente",
    "mockup.activeCall": "Llamada activa",
    "mockup.aiReceptionistAgent": "Agente de recepción de IA",
    "mockup.liveAudioStream": "Transmisión de audio en vivo",
    "mockup.caller": "Llamador",
    "mockup.agentName": "Agent On Demand"
  },
  fr: {
    "mockup.system.calendarRules": "Règles de calendrier appliquées",
    "mockup.system.businessHours": "Heures de bureau vérifiées",
    "mockup.system.smartEscalation": "Route d'escalade intelligente",
    "mockup.activeCall": "Appel actif",
    "mockup.aiReceptionistAgent": "Agent d'accueil IA",
    "mockup.liveAudioStream": "Flux audio en direct",
    "mockup.caller": "Appelant",
    "mockup.agentName": "Agent On Demand"
  },
  de: {
    "mockup.system.calendarRules": "Kalenderregeln angewendet",
    "mockup.system.businessHours": "Geschäftszeiten verifiziert",
    "mockup.system.smartEscalation": "Intelligente Eskalationsroute",
    "mockup.activeCall": "Aktiver Anruf",
    "mockup.aiReceptionistAgent": "KI-Empfangsagent",
    "mockup.liveAudioStream": "Live-Audiostream",
    "mockup.caller": "Anrufer",
    "mockup.agentName": "Agent On Demand"
  }
};

for (const [lang, keys] of Object.entries(conversationsTranslations)) {
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
console.log("Successfully added conversation translation keys to translations.ts!");
