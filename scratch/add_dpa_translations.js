const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const dpaTranslations = {
  en: {
    "dpa.title": "Data Processing Addendum (DPA)",
    "dpa.subtitle": "Data Processing Addendum",
    "dpa.agreement": "This Data Processing Addendum (\"DPA\") forms part of the agreement between Agent On Demand (\"Processor\") and the customer (\"Controller\") regarding the processing of personal data through the Services.",
    "dpa.scope.title": "Scope",
    "dpa.scope.text": "Agent On Demand processes personal data solely on documented instructions from the Customer and only for the purpose of providing the contracted Services.",
    "dpa.types.title": "Types of Data",
    "dpa.types.intro": "Depending on the Services used, personal data may include:",
    "dpa.types.item.names": "Names",
    "dpa.types.item.emails": "Email addresses",
    "dpa.types.item.phones": "Telephone numbers",
    "dpa.types.item.business": "Business information",
    "dpa.types.item.comms": "Customer communications",
    "dpa.types.item.recordings": "Call recordings",
    "dpa.types.item.transcripts": "Voice transcripts",
    "dpa.types.item.appointments": "Appointment details",
    "dpa.types.item.crm": "CRM records",
    "dpa.purpose.title": "Purpose of Processing",
    "dpa.purpose.intro": "Personal data is processed to:",
    "dpa.purpose.item.services": "Deliver AI voice and chat services.",
    "dpa.purpose.item.route": "Route customer communications.",
    "dpa.purpose.item.schedule": "Schedule appointments.",
    "dpa.purpose.item.maintain": "Maintain customer records.",
    "dpa.purpose.item.analytics": "Generate reports and analytics.",
    "dpa.purpose.item.improve": "Improve platform functionality."
  },
  it: {
    "dpa.title": "Addendum sul Trattamento dei Dati (DPA)",
    "dpa.subtitle": "Addendum sul Trattamento dei Dati",
    "dpa.agreement": "Il presente Addendum sul Trattamento dei Dati (\"DPA\") costituisce parte integrante dell'accordo tra Agent On Demand (\"Responsabile\") e il cliente (\"Titolare\") in merito al trattamento dei dati personali attraverso i Servizi.",
    "dpa.scope.title": "Ambito di applicazione",
    "dpa.scope.text": "Agent On Demand tratta i dati personali esclusivamente sulla base delle istruzioni documentate del Cliente e solo al fine di fornire i Servizi contrattualizzati.",
    "dpa.types.title": "Tipi di Dati",
    "dpa.types.intro": "A seconda dei Servizi utilizzati, i dati personali possono includere:",
    "dpa.types.item.names": "Nomi",
    "dpa.types.item.emails": "Indirizzi email",
    "dpa.types.item.phones": "Numeri di telefono",
    "dpa.types.item.business": "Informazioni aziendali",
    "dpa.types.item.comms": "Comunicazioni con i clienti",
    "dpa.types.item.recordings": "Registrazioni delle chiamate",
    "dpa.types.item.transcripts": "Trascrizioni vocali",
    "dpa.types.item.appointments": "Dettagli degli appuntamenti",
    "dpa.types.item.crm": "Record del CRM",
    "dpa.purpose.title": "Finalità del Trattamento",
    "dpa.purpose.intro": "I dati personali sono trattati per:",
    "dpa.purpose.item.services": "Fornire servizi vocali e di chat AI.",
    "dpa.purpose.item.route": "Inoltrare le comunicazioni con i clienti.",
    "dpa.purpose.item.schedule": "Pianificare appuntamenti.",
    "dpa.purpose.item.maintain": "Mantenere i registri dei clienti.",
    "dpa.purpose.item.analytics": "Generare report e analisi.",
    "dpa.purpose.item.improve": "Migliorare la funzionalità della piattaforma."
  },
  es: {
    "dpa.title": "Anexo de Procesamiento de Datos (DPA)",
    "dpa.subtitle": "Anexo de Procesamiento de Datos",
    "dpa.agreement": "Este Anexo de Procesamiento de Datos (\"DPA\") forma parte del acuerdo entre Agent On Demand (\"Encargado\") y el cliente (\"Responsable\") con respecto al procesamiento de datos personales a través de los Servicios.",
    "dpa.scope.title": "Alcance",
    "dpa.scope.text": "Agent On Demand procesa datos personales únicamente según las instrucciones documentadas del Cliente y solo con el fin de proporcionar los Servicios contratados.",
    "dpa.types.title": "Tipos de Datos",
    "dpa.types.intro": "Dependiendo de los Servicios utilizados, los datos personales pueden incluir:",
    "dpa.types.item.names": "Nombres",
    "dpa.types.item.emails": "Direcciones de correo electrónico",
    "dpa.types.item.phones": "Números de teléfono",
    "dpa.types.item.business": "Información comercial",
    "dpa.types.item.comms": "Comunicaciones del cliente",
    "dpa.types.item.recordings": "Grabaciones de llamadas",
    "dpa.types.item.transcripts": "Transcripciones de voz",
    "dpa.types.item.appointments": "Detalles de citas",
    "dpa.types.item.crm": "Registros de CRM",
    "dpa.purpose.title": "Finalidad del Procesamiento",
    "dpa.purpose.intro": "Los datos personales se procesan para:",
    "dpa.purpose.item.services": "Ofrecer servicios de voz y chat de IA.",
    "dpa.purpose.item.route": "Enrutar las comunicaciones de los clientes.",
    "dpa.purpose.item.schedule": "Programar citas.",
    "dpa.purpose.item.maintain": "Mantener los registros de los clientes.",
    "dpa.purpose.item.analytics": "Generar informes y análisis.",
    "dpa.purpose.item.improve": "Mejorar la funcionalidad de la plataforma."
  },
  fr: {
    "dpa.title": "Accord de Traitement des Données (DPA)",
    "dpa.subtitle": "Accord de Traitement des Données",
    "dpa.agreement": "Cet Accord de Traitement des Données (\"DPA\") fait partie de l'accord entre Agent On Demand (\"Sous-traitant\") et le client (\"Responsable du traitement\") concernant le traitement des données personnelles via les Services.",
    "dpa.scope.title": "Portée",
    "dpa.scope.text": "Agent On Demand traite les données personnelles uniquement sur instructions documentées de la part du Client et uniquement dans le but de fournir les Services contractés.",
    "dpa.types.title": "Types de Données",
    "dpa.types.intro": "Selon les Services utilisés, les données personnelles peuvent inclure :",
    "dpa.types.item.names": "Noms",
    "dpa.types.item.emails": "Adresses e-mail",
    "dpa.types.item.phones": "Numéros de téléphone",
    "dpa.types.item.business": "Informations commerciales",
    "dpa.types.item.comms": "Communications clients",
    "dpa.types.item.recordings": "Enregistrements d'appels",
    "dpa.types.item.transcripts": "Transcriptions vocales",
    "dpa.types.item.appointments": "Détails des rendez-vous",
    "dpa.types.item.crm": "Enregistrements CRM",
    "dpa.purpose.title": "Finalité du Traitement",
    "dpa.purpose.intro": "Les données personnelles sont traitées pour :",
    "dpa.purpose.item.services": "Fournir des services de voix et de chat IA.",
    "dpa.purpose.item.route": "Aminer les communications clients.",
    "dpa.purpose.item.schedule": "Planifier des rendez-vous.",
    "dpa.purpose.item.maintain": "Tenir les dossiers clients.",
    "dpa.purpose.item.analytics": "Générer des rapports et des analyses.",
    "dpa.purpose.item.improve": "Améliorer les fonctionnalités de la plateforme."
  },
  de: {
    "dpa.title": "Auftragsverarbeitungsvertrag (AVV)",
    "dpa.subtitle": "Auftragsverarbeitungsvertrag",
    "dpa.agreement": "Dieser Auftragsverarbeitungsvertrag („AVV“) ist Teil der Vereinbarung zwischen Agent On Demand („Auftragsverarbeiter“) und dem Kunden („Verantwortlicher“) bezüglich der Verarbeitung personenbezogener Daten durch die Dienste.",
    "dpa.scope.title": "Umfang",
    "dpa.scope.text": "Agent On Demand verarbeitet personenbezogene Daten ausschließlich auf dokumentierte Weisung des Kunden und nur zum Zweck der Bereitstellung der vertraglich vereinbarten Dienste.",
    "dpa.types.title": "Arten von Daten",
    "dpa.types.intro": "Je nach genutzten Diensten können personenbezogene Daten Folgendes umfassen:",
    "dpa.types.item.names": "Namen",
    "dpa.types.item.emails": "E-Mail-Adressen",
    "dpa.types.item.phones": "Telefonnummern",
    "dpa.types.item.business": "Geschäftliche Informationen",
    "dpa.types.item.comms": "Kundenkommunikation",
    "dpa.types.item.recordings": "Anrufaufzeichnungen",
    "dpa.types.item.transcripts": "Sprachtranskripte",
    "dpa.types.item.appointments": "Termindetails",
    "dpa.types.item.crm": "CRM-Einträge",
    "dpa.purpose.title": "Zweck der Verarbeitung",
    "dpa.purpose.intro": "Personenbezogene Daten werden verarbeitet, um:",
    "dpa.purpose.item.services": "KI-Sprach- und Chatdienste bereitzustellen.",
    "dpa.purpose.item.route": "Kundenkommunikation weiterzuleiten.",
    "dpa.purpose.item.schedule": "Termine zu vereinbaren.",
    "dpa.purpose.item.maintain": "Kundenkarteien zu führen.",
    "dpa.purpose.item.analytics": "Berichte und Analysen zu erstellen.",
    "dpa.purpose.item.improve": "Die Funktionalität der Plattform zu verbessern."
  }
};

for (const [lang, keys] of Object.entries(dpaTranslations)) {
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
console.log("Successfully added DPA translations to translations.ts!");
