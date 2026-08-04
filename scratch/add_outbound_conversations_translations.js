const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const outboundTranslations = {
  en: {
    "mockup.liveCallSimulator": "Live Call Simulator",
    "mockup.active": "Active",
    "mockup.customer": "Customer",
    "mockup.agentTitle": "Ava (AI Assistant)",
    "mockup.noLatency": "No latency audio (0.3s)",
    "mockup.crmUpdated": "CRM updated"
  },
  it: {
    "mockup.liveCallSimulator": "Simulatore di chiamata dal vivo",
    "mockup.active": "Attivo",
    "mockup.customer": "Cliente",
    "mockup.agentTitle": "Ava (Assistente IA)",
    "mockup.noLatency": "Audio a latenza zero (0,3 s)",
    "mockup.crmUpdated": "CRM aggiornato"
  },
  es: {
    "mockup.liveCallSimulator": "Simulador de llamadas en vivo",
    "mockup.active": "Activo",
    "mockup.customer": "Cliente",
    "mockup.agentTitle": "Ava (Asistente de IA)",
    "mockup.noLatency": "Audio sin latencia (0,3 s)",
    "mockup.crmUpdated": "CRM actualizado"
  },
  fr: {
    "mockup.liveCallSimulator": "Simulateur d'appels en direct",
    "mockup.active": "Actif",
    "mockup.customer": "Client",
    "mockup.agentTitle": "Ava (Assistant IA)",
    "mockup.noLatency": "Audio sans latence (0,3 s)",
    "mockup.crmUpdated": "CRM mis à jour"
  },
  de: {
    "mockup.liveCallSimulator": "Live-Anrufsimulator",
    "mockup.active": "Aktiv",
    "mockup.customer": "Kunde",
    "mockup.agentTitle": "Ava (KI-Assistent)",
    "mockup.noLatency": "Audio ohne Latenz (0,3 s)",
    "mockup.crmUpdated": "CRM aktualisiert"
  }
};

for (const [lang, keys] of Object.entries(outboundTranslations)) {
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
console.log("Successfully added outbound conversation translations to translations.ts!");
