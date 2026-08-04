const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const standardPricingTranslations = {
  en: {
    "pricing.plan.standard.name": "AI Call Agent",
    "pricing.plan.standard.price": "€150",
    "pricing.plan.standard.period": "/month",
    "pricing.plan.standard.desc": "All advanced features included, plus €200 onboarding fee.",
    "pricing.plan.standard.onboarding": "€200 onboarding fee (one-time setup)",
    "pricing.plan.standard.feat.minutes": "300 minutes of calling time per month",
    "pricing.plan.standard.feat.answering": "24/7 Inbound Answering & Outbound Calling",
    "pricing.plan.standard.feat.calendar": "Appointment Booking (Google & Outlook Calendar)",
    "pricing.plan.standard.feat.leads": "Lead Answering & Custom Lead Qualification",
    "pricing.plan.standard.feat.transfer": "Real-time Priority Call Transfer to Staff",
    "pricing.plan.standard.feat.languages": "Native support for 30+ languages",
    "pricing.plan.standard.feat.integrations": "Instant CRM sync (Hubspot, Salesforce, etc.)",
    "pricing.plan.standard.feat.support": "Dedicated onboarding & setup assistance",
    "pricing.plan.standard.cta": "Get Started Now"
  },
  it: {
    "pricing.plan.standard.name": "Agente Telefonico AI",
    "pricing.plan.standard.price": "€150",
    "pricing.plan.standard.period": "/mese",
    "pricing.plan.standard.desc": "Tutte le funzionalità avanzate incluse, più €200 di costo di onboarding.",
    "pricing.plan.standard.onboarding": "€200 di costo di onboarding (configurazione una tantum)",
    "pricing.plan.standard.feat.minutes": "300 minuti di chiamate al mese",
    "pricing.plan.standard.feat.answering": "Risposta 24/7 e Chiamate in Uscita",
    "pricing.plan.standard.feat.calendar": "Prenotazione Appuntamenti (Calendario Google e Outlook)",
    "pricing.plan.standard.feat.leads": "Risposta ai Contatti e Qualificazione Personalizzata",
    "pricing.plan.standard.feat.transfer": "Trasferimento Chiamate in Tempo Reale allo Staff",
    "pricing.plan.standard.feat.languages": "Supporto nativo per oltre 30 lingue",
    "pricing.plan.standard.feat.integrations": "Sincronizzazione CRM Istantanea (Hubspot, Salesforce, ecc.)",
    "pricing.plan.standard.feat.support": "Assistenza dedicata all'onboarding e configurazione",
    "pricing.plan.standard.cta": "Inizia Ora"
  },
  es: {
    "pricing.plan.standard.name": "Agente de Llamadas AI",
    "pricing.plan.standard.price": "€150",
    "pricing.plan.standard.period": "/mes",
    "pricing.plan.standard.desc": "Todas las funciones avanzadas incluidas, más €200 de tarifa de incorporación.",
    "pricing.plan.standard.onboarding": "€200 de tarifa de incorporación (configuración única)",
    "pricing.plan.standard.feat.minutes": "300 minutos de llamadas al mes",
    "pricing.plan.standard.feat.answering": "Respuestas 24/7 y Llamadas Salientes",
    "pricing.plan.standard.feat.calendar": "Reserva de Citas (Google Calendar y Outlook)",
    "pricing.plan.standard.feat.leads": "Respuesta a Prospectos y Calificación de Leads",
    "pricing.plan.standard.feat.transfer": "Transferencia de Llamadas en Tiempo Real al Personal",
    "pricing.plan.standard.feat.languages": "Soporte nativo en más de 30 idiomas",
    "pricing.plan.standard.feat.integrations": "Sincronización instantánea con CRM (Hubspot, Salesforce, etc.)",
    "pricing.plan.standard.feat.support": "Asistencia dedicada para la incorporación y configuración",
    "pricing.plan.standard.cta": "Comenzar Ahora"
  },
  fr: {
    "pricing.plan.standard.name": "Agent d'Appel IA",
    "pricing.plan.standard.price": "€150",
    "pricing.plan.standard.period": "/mois",
    "pricing.plan.standard.desc": "Toutes les fonctionnalités avancées incluses, plus 200 € de frais d'intégration.",
    "pricing.plan.standard.onboarding": "200 € de frais d'intégration (configuration unique)",
    "pricing.plan.standard.feat.minutes": "300 minutes d'appels par mois",
    "pricing.plan.standard.feat.answering": "Réponse 24h/24 & Appels Sortants",
    "pricing.plan.standard.feat.calendar": "Prise de rendez-vous (Google Calendar & Outlook)",
    "pricing.plan.standard.feat.leads": "Réponse aux prospects & qualification personnalisée",
    "pricing.plan.standard.feat.transfer": "Transfert d'appels en temps réel vers le personnel",
    "pricing.plan.standard.feat.languages": "Support natif pour plus de 30 langues",
    "pricing.plan.standard.feat.integrations": "Synchro CRM instantanée (Hubspot, Salesforce, etc.)",
    "pricing.plan.standard.feat.support": "Assistance dédiée à l'intégration & configuration",
    "pricing.plan.standard.cta": "Commencer Maintenant"
  },
  de: {
    "pricing.plan.standard.name": "KI-Anruf-Agent",
    "pricing.plan.standard.price": "€150",
    "pricing.plan.standard.period": "/Monat",
    "pricing.plan.standard.desc": "Alle erweiterten Funktionen enthalten, plus €200 Einrichtungsgebühr.",
    "pricing.plan.standard.onboarding": "€200 Einrichtungsgebühr (einmalige Einrichtung)",
    "pricing.plan.standard.feat.minutes": "300 Anrufminuten pro Monat",
    "pricing.plan.standard.feat.answering": "24/7 Anrufannahme & ausgehende Anrufe",
    "pricing.plan.standard.feat.calendar": "Terminbuchung (Google & Outlook Kalender)",
    "pricing.plan.standard.feat.leads": "Lead-Beantwortung & benutzerdefinierte Qualifizierung",
    "pricing.plan.standard.feat.transfer": "Echtzeit-Anrufweiterleitung an Mitarbeiter",
    "pricing.plan.standard.feat.languages": "Native Unterstützung für 30+ Sprachen",
    "pricing.plan.standard.feat.integrations": "Sofortiger CRM-Abgleich (Hubspot, Salesforce, etc.)",
    "pricing.plan.standard.feat.support": "Engagierte Unterstützung bei Einrichtung & Onboarding",
    "pricing.plan.standard.cta": "Jetzt Starten"
  }
};

for (const [lang, keys] of Object.entries(standardPricingTranslations)) {
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
console.log("Successfully added standard plan pricing translations to translations.ts!");
