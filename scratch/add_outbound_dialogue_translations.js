const fs = require('fs');
const path = require('path');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const dialogueTranslations = {
  en: {
    "outbound.mockup.dialogue.customer": "I am actually in the middle of something. Can you call me back tomorrow?",
    "outbound.mockup.dialogue.agent": "I completely understand! I can schedule a quick callback for tomorrow at 10 AM. Would that work?",
    "outbound.mockup.dialogue.sms": "Hi Sarah, as discussed on our call, here is the link to confirm your callback: aod.ai/c/sarah-jenkins",
    "outbound.mockup.dialogue.retry": "Call attempt 1 missed. Auto-scheduling retry in 4 hours. Follow-up SMS sent."
  },
  it: {
    "outbound.mockup.dialogue.customer": "In realtà sono nel bel mezzo di qualcosa. Puoi richiamarmi domani?",
    "outbound.mockup.dialogue.agent": "Capisco perfettamente! Posso programmare un rapido richiamo per domani alle 10:00. Va bene?",
    "outbound.mockup.dialogue.sms": "Ciao Sarah, come discusso nella nostra chiamata, ecco il link per confermare il richiamo: aod.ai/c/sarah-jenkins",
    "outbound.mockup.dialogue.retry": "Tentativo di chiamata 1 fallito. Ripetizione automatica programmata tra 4 ore. SMS di follow-up inviato."
  },
  es: {
    "outbound.mockup.dialogue.customer": "La verdad es que estoy en medio de algo. ¿Me puedes volver a llamar mañana?",
    "outbound.mockup.dialogue.agent": "¡Entiendo perfectamente! Puedo programar una llamada de vuelta rápida para mañana a las 10 AM. ¿Te parece bien?",
    "outbound.mockup.dialogue.sms": "Hola Sarah, como lo hablamos en nuestra llamada, aquí tienes el enlace para confirmar tu devolución: aod.ai/c/sarah-jenkins",
    "outbound.mockup.dialogue.retry": "Intento de llamada 1 fallido. Reintento programado automáticamente en 4 horas. SMS de seguimiento enviado."
  },
  fr: {
    "outbound.mockup.dialogue.customer": "Je suis en train de faire quelque chose. Pouvez-vous me rappeler demain ?",
    "outbound.mockup.dialogue.agent": "Je comprends tout à fait ! Je peux planifier un rappel rapide demain à 10h00. Cela vous convient-il ?",
    "outbound.mockup.dialogue.sms": "Bonjour Sarah, comme convenu lors de notre appel, voici le lien pour confirmer votre rappel : aod.ai/c/sarah-jenkins",
    "outbound.mockup.dialogue.retry": "Tentative d'appel 1 manquée. Rappel automatique programmé dans 4 heures. SMS de suivi envoyé."
  },
  de: {
    "outbound.mockup.dialogue.customer": "Ich bin gerade beschäftigt. Können Sie mich morgen zurückrufen?",
    "outbound.mockup.dialogue.agent": "Das verstehe ich vollkommen! Ich kann einen schnellen Rückruf für morgen um 10:00 Uhr einplanen. Passt das?",
    "outbound.mockup.dialogue.sms": "Hallo Sarah, wie telefonisch besprochen ist hier der Link zur Bestätigung deines Rückrufs: aod.ai/c/sarah-jenkins",
    "outbound.mockup.dialogue.retry": "Anrufversuch 1 fehlgeschlagen. Automatischer Rückruf in 4 Stunden geplant. Follow-up-SMS gesendet."
  }
};

for (const [lang, keys] of Object.entries(dialogueTranslations)) {
  const marker = `"${lang}": {`;
  const idx = content.indexOf(marker);
  if (idx !== -1) {
    const insertPos = idx + marker.length;
    let insertion = "\n";
    for (const [k, v] of Object.entries(keys)) {
      const escapedVal = v.replace(/"/g, '\\"');
      insertion += `    "${k}": "${escapedVal}",\n`;
    }
    content = content.slice(0, insertPos) + insertion + content.slice(insertPos);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully added outbound dialogue mockup keys to translations.ts!");
