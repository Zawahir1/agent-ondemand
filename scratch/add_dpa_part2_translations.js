const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const dpaPart2Translations = {
  en: {
    "dpa.security.title": "Security Measures",
    "dpa.security.text": "Agent On Demand implements commercially reasonable administrative, technical, and organizational measures to protect personal data against unauthorized access, disclosure, alteration, or destruction.",
    "dpa.subprocessors.title": "Subprocessors",
    "dpa.subprocessors.text": "Agent On Demand may engage trusted subprocessors, including cloud hosting, communication providers, AI infrastructure providers, and payment processors. We remain responsible for ensuring appropriate contractual safeguards with these subprocessors.",
    "dpa.transfers.title": "International Transfers",
    "dpa.transfers.text": "Where personal data is transferred internationally, Agent On Demand will implement appropriate safeguards as required by applicable data protection laws.",
    "dpa.rights.title": "Data Subject Rights",
    "dpa.rights.text": "Agent On Demand will reasonably assist Customers in responding to lawful requests relating to access, correction, deletion, restriction, portability, or other applicable data subject rights.",
    "dpa.retention.title": "Data Retention and Deletion",
    "dpa.retention.text": "Upon termination of the Services, personal data will be retained only as necessary to comply with legal obligations or resolve disputes, after which it will be securely deleted or anonymized where feasible.",
    "dpa.contact.title": "Contact",
    "dpa.contact.text": "Questions regarding this DPA may be directed to:",
    "dpa.contact.name": "Agent On Demand",
    "dpa.contact.email": "Email: support@agent-ondemand.com",
    "dpa.contact.website": "Website: https://www.agent-ondemand.com/"
  },
  it: {
    "dpa.security.title": "Misure di Sicurezza",
    "dpa.security.text": "Agent On Demand implementa misure amministrative, tecniche e organizzative commercialmente ragionevoli per proteggere i dati personali da accessi non autorizzati, divulgazione, alterazione o distruzione.",
    "dpa.subprocessors.title": "Subresponsabili",
    "dpa.subprocessors.text": "Agent On Demand può avvalersi di subresponsabili fidati, inclusi servizi di cloud hosting, fornitori di comunicazioni, fornitori di infrastrutture AI e processori di pagamento. Rimaniamo responsabili di garantire adeguate tutele contrattuali con tali subresponsabili.",
    "dpa.transfers.title": "Trasferimenti Internazionali",
    "dpa.transfers.text": "Qualora i dati personali vengano trasferiti a livello internazionale, Agent On Demand implementerà le tutele adeguate come richiesto dalle leggi applicabili sulla protezione dei dati.",
    "dpa.rights.title": "Diritti dell'Interessato",
    "dpa.rights.text": "Agent On Demand assisterà ragionevolmente i Clienti nel rispondere a richieste legittime relative a accesso, rettifica, cancellazione, limitazione, portabilità o altri diritti applicabili dell'interessato.",
    "dpa.retention.title": "Conservazione e Cancellazione dei Dati",
    "dpa.retention.text": "Al termine dei Servizi, i dati personali saranno conservati solo per il tempo necessario ad adempiere agli obblighi di legge o risolvere controversie, dopodiché saranno cancellati in modo sicuro o anonimizzati laddove fattibile.",
    "dpa.contact.title": "Contatti",
    "dpa.contact.text": "Le domande relative a questo DPA possono essere indirizzate a:",
    "dpa.contact.name": "Agent On Demand",
    "dpa.contact.email": "Email: support@agent-ondemand.com",
    "dpa.contact.website": "Sito web: https://www.agent-ondemand.com/"
  },
  es: {
    "dpa.security.title": "Medidas de Seguridad",
    "dpa.security.text": "Agent On Demand implementa medidas administrativas, técnicas y organizativas comercialmente razonables para proteger los datos personales contra el acceso no autorizado, la divulgación, la alteración o la destrucción.",
    "dpa.subprocessors.title": "Subencargados",
    "dpa.subprocessors.text": "Agent On Demand puede contratar subencargados de confianza, lo que incluye alojamiento en la nube, proveedores de comunicaciones, proveedores de infraestructura de IA y procesadores de pagos. Seguimos siendo responsables de garantizar las salvaguardas contractuales adecuadas con estos subencargados.",
    "dpa.transfers.title": "Transferencias Internacionales",
    "dpa.transfers.text": "Cuando los datos personales se transfieran internacionalmente, Agent On Demand implementará las salvaguardas adecuadas según lo exijan las leyes de protección de datos aplicables.",
    "dpa.rights.title": "Derechos de los Interesados",
    "dpa.rights.text": "Agent On Demand ayudará razonablemente a los Clientes a responder a solicitudes legítimas relacionadas con el acceso, la rectificación, la eliminación, la restricción, la portabilidad u otros derechos aplicables de los interesados.",
    "dpa.retention.title": "Retención y Eliminación de Datos",
    "dpa.retention.text": "Al finalizar los Servicios, los datos personales se conservarán solo en la medida necesaria para cumplir con las obligaciones legales o resolver disputas, después de lo cual se eliminarán de forma segura o se anonimizarán cuando sea factible.",
    "dpa.contact.title": "Contacto",
    "dpa.contact.text": "Las preguntas sobre este DPA pueden dirigirse a:",
    "dpa.contact.name": "Agent On Demand",
    "dpa.contact.email": "Email: support@agent-ondemand.com",
    "dpa.contact.website": "Sitio web: https://www.agent-ondemand.com/"
  },
  fr: {
    "dpa.security.title": "Mesures de Sécurité",
    "dpa.security.text": "Agent On Demand met en œuvre des mesures administratives, techniques et organisationnelles commercialement raisonnables pour protéger les données personnelles contre l'accès non autorisé, la divulgation, l'altération ou la destruction.",
    "dpa.subprocessors.title": "Sous-traitants ultérieurs",
    "dpa.subprocessors.text": "Agent On Demand peut faire appel à des sous-traitants ultérieurs de confiance, notamment l'hébergement cloud, les fournisseurs de communications, les fournisseurs d'infrastructures d'IA et les processeurs de paiement. Nous restons responsables de garantir les garanties contractuelles appropriées avec ces sous-traitants.",
    "dpa.transfers.title": "Transferts Internationaux",
    "dpa.transfers.text": "Lorsque des données personnelles sont transférées à l'échelle internationale, Agent On Demand mettra en œuvre les garanties appropriées comme l'exigent les lois applicables sur la protection des données.",
    "dpa.rights.title": "Droits des Personnes Concernées",
    "dpa.rights.text": "Agent On Demand assistera raisonnablement les Clients pour répondre aux demandes légitimes concernant l'accès, la rectification, la suppression, la limitation, la portabilité ou tout autre droit applicable des personnes concernées.",
    "dpa.retention.title": "Conservation et Suppression des Données",
    "dpa.retention.text": "À la résiliation des Services, les données personnelles ne seront conservées que dans la mesure nécessaire pour se conformer aux obligations légales ou résoudre les litiges, après quoi elles seront supprimées en toute sécurité ou anonymisées lorsque cela est possible.",
    "dpa.contact.title": "Contact",
    "dpa.contact.text": "Les questions concernant ce DPA peuvent être adressées à :",
    "dpa.contact.name": "Agent On Demand",
    "dpa.contact.email": "E-mail : support@agent-ondemand.com",
    "dpa.contact.website": "Site Web : https://www.agent-ondemand.com/"
  },
  de: {
    "dpa.security.title": "Sicherheitsmaßnahmen",
    "dpa.security.text": "Agent On Demand implementiert wirtschaftlich angemessene administrative, technische und organisatorische Maßnahmen, um personenbezogene Daten vor unbefugtem Zugriff, unbefugter Offenlegung, Veränderung oder Zerstörung zu schützen.",
    "dpa.subprocessors.title": "Unterauftragnehmer",
    "dpa.subprocessors.text": "Agent On Demand kann vertrauenswürdige Unterauftragnehmer beauftragen, einschließlich Cloud-Hosting, Kommunikationsanbieter, KI-Infrastrukturanbieter und Zahlungsabwickler. Wir bleiben dafür verantwortlich, angemessene vertragliche Garantien mit diesen Unterauftragnehmern sicherzustellen.",
    "dpa.transfers.title": "Internationale Übertragungen",
    "dpa.transfers.text": "Wenn personenbezogene Daten international übertragen werden, wird Agent On Demand angemessene Garantien gemäß den geltenden Datenschutzgesetzen implementieren.",
    "dpa.rights.title": "Rechte der betroffenen Personen",
    "dpa.rights.text": "Agent On Demand unterstützt Kunden in angemessener Weise bei der Beantwortung rechtmäßiger Anfragen im Zusammenhang mit Auskunft, Berichtigung, Löschung, Einschränkung, Übertragbarkeit oder anderen anwendbaren Rechten betroffener Personen.",
    "dpa.retention.title": "Datenaufbewahrung und -löschung",
    "dpa.retention.text": "Nach Beendigung der Dienste werden personenbezogene Daten nur so lange aufbewahrt, wie dies zur Erfüllung gesetzlicher Verpflichtungen oder zur Beilegung von Streitigkeiten erforderlich ist. Danach werden sie sicher gelöscht oder, sofern möglich, anonymisiert.",
    "dpa.contact.title": "Kontakt",
    "dpa.contact.text": "Fragen zu diesem AVV können gerichtet werden an:",
    "dpa.contact.name": "Agent On Demand",
    "dpa.contact.email": "E-Mail: support@agent-ondemand.com",
    "dpa.contact.website": "Website: https://www.agent-ondemand.com/"
  }
};

for (const [lang, keys] of Object.entries(dpaPart2Translations)) {
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
console.log("Successfully added DPA Part 2 translations to translations.ts!");
