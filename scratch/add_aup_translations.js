const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const aupTranslations = {
  en: {
    "footer.links.legal.aup": "AUP",
    "aup.title": "Acceptable Use Policy (AUP)",
    "aup.subtitle": "Acceptable Use Policy",
    "aup.intro": "This Acceptable Use Policy outlines the rules governing the use of Agent On Demand's AI platform.",
    "aup.prohibited.title": "Prohibited Actions",
    "aup.prohibited.intro": "Users agree not to use the Services to:",
    "aup.prohibited.item.law": "Violate any applicable law or regulation.",
    "aup.prohibited.item.fraud": "Engage in fraud, scams, phishing, or deceptive practices.",
    "aup.prohibited.item.harass": "Harass, threaten, or abuse individuals.",
    "aup.prohibited.item.malware": "Distribute malware, viruses, or malicious software.",
    "aup.prohibited.item.marketing": "Send unsolicited or unlawful marketing communications.",
    "aup.prohibited.item.ip": "Infringe upon intellectual property rights.",
    "aup.prohibited.item.content": "Generate or distribute unlawful, defamatory, hateful, or discriminatory content.",
    "aup.prohibited.item.access": "Attempt unauthorized access to systems or accounts.",
    "aup.prohibited.item.interfere": "Interfere with the security, integrity, or performance of the platform.",
    "aup.prohibited.item.impersonate": "Use the platform to impersonate another individual or organization without authorization.",
    "aup.calls.title": "AI Voice Calls",
    "aup.calls.intro": "Customers are responsible for:",
    "aup.calls.item.consent": "Obtaining all legally required caller consent.",
    "aup.calls.item.laws": "Complying with telemarketing, consumer protection, and call recording laws.",
    "aup.calls.item.lawful": "Ensuring AI interactions are lawful and appropriate.",
    "aup.enforcement.title": "Enforcement",
    "aup.enforcement.text1": "Agent On Demand reserves the right to investigate violations of this Policy and may suspend or terminate accounts without notice for misuse of the Services.",
    "aup.enforcement.text2": "Serious violations may be reported to law enforcement or other appropriate authorities where required by law."
  },
  it: {
    "footer.links.legal.aup": "AUP",
    "aup.title": "Politica di Utilizzo Accettabile (AUP)",
    "aup.subtitle": "Politica di Utilizzo Accettabile",
    "aup.intro": "La presente Politica di Utilizzo Accettabile stabilisce le regole che disciplinano l'uso della piattaforma AI di Agent On Demand.",
    "aup.prohibited.title": "Azioni Vietate",
    "aup.prohibited.intro": "Gli utenti si impegnano a non utilizzare i Servizi per:",
    "aup.prohibited.item.law": "Violare leggi o regolamenti applicabili.",
    "aup.prohibited.item.fraud": "Impegnarsi in frodi, truffe, phishing o pratiche ingannevoli.",
    "aup.prohibited.item.harass": "Molestare, minacciare o abusare di persone.",
    "aup.prohibited.item.malware": "Distribuire malware, virus o software dannoso.",
    "aup.prohibited.item.marketing": "Inviare comunicazioni di marketing non richieste o illegali.",
    "aup.prohibited.item.ip": "Violare i diritti di proprietà intellettuale.",
    "aup.prohibited.item.content": "Generare o distribuire contenuti illegali, diffamatori, d'odio o discriminatori.",
    "aup.prohibited.item.access": "Tentare l'accesso non autorizzato a sistemi o account.",
    "aup.prohibited.item.interfere": "Interferire con la sicurezza, l'integrità o le prestazioni della piattaforma.",
    "aup.prohibited.item.impersonate": "Utilizzare la piattaforma per impersonare un'altra persona o organizzazione senza autorizzazione.",
    "aup.calls.title": "Chiamate Vocali AI",
    "aup.calls.intro": "I clienti sono responsabili di:",
    "aup.calls.item.consent": "Ottenere tutti i consensi del chiamante legalmente richiesti.",
    "aup.calls.item.laws": "Rispettare le leggi sul telemarketing, sulla tutela dei consumatori e sulla registrazione delle chiamate.",
    "aup.calls.item.lawful": "Garantire che le interazioni dell'AI siano lecite e appropriate.",
    "aup.enforcement.title": "Applicazione",
    "aup.enforcement.text1": "Agent On Demand si riserva il diritto di indagare sulle violazioni di questa Politica e può sospendere o chiudere gli account senza preavviso per uso improprio dei Servizi.",
    "aup.enforcement.text2": "Le violazioni gravi possono essere segnalate alle forze dell'ordine o ad altre autorità competenti laddove richiesto dalla legge."
  },
  es: {
    "footer.links.legal.aup": "AUP",
    "aup.title": "Política de Uso Aceptable (AUP)",
    "aup.subtitle": "Política de Uso Aceptable",
    "aup.intro": "Esta Política de Uso Aceptable describe las reglas que rigen el uso de la plataforma de IA de Agent On Demand.",
    "aup.prohibited.title": "Acciones Prohibidas",
    "aup.prohibited.intro": "Los usuarios aceptan no utilizar los Servicios para:",
    "aup.prohibited.item.law": "Violar cualquier ley o regulación aplicable.",
    "aup.prohibited.item.fraud": "Participar en fraudes, estafas, phishing o prácticas engañosas.",
    "aup.prohibited.item.harass": "Acosar, amenazar o abusar de personas.",
    "aup.prohibited.item.malware": "Distribuir malware, virus o software malicioso.",
    "aup.prohibited.item.marketing": "Enviar comunicaciones de marketing no solicitadas o ilegales.",
    "aup.prohibited.item.ip": "Infringir los derechos de propiedad intelectual.",
    "aup.prohibited.item.content": "Generar o distribuir contenido ilegal, difamatorio, de odio o discriminatorio.",
    "aup.prohibited.item.access": "Intentar el acceso no autorizado a sistemas o cuentas.",
    "aup.prohibited.item.interfere": "Interferir con la seguridad, integridad o rendimiento de la plataforma.",
    "aup.prohibited.item.impersonate": "Utilizar la plataforma para suplantar a otra persona u organización sin autorización.",
    "aup.calls.title": "Llamadas de Voz de IA",
    "aup.calls.intro": "Los clientes son responsables de:",
    "aup.calls.item.consent": "Obtener todos los consentimientos de llamadas legalmente requeridos.",
    "aup.calls.item.laws": "Cumplir con las leyes de telemercadeo, protección al consumidor y grabación de llamadas.",
    "aup.calls.item.lawful": "Garantizar que las interacciones de IA sean legales y apropiadas.",
    "aup.enforcement.title": "Aplicación",
    "aup.enforcement.text1": "Agent On Demand se reserva el derecho de investigar las violaciones de esta Política y puede suspender o cancelar cuentas sin previo aviso por el uso indebido de los Servicios.",
    "aup.enforcement.text2": "Las violaciones graves pueden ser denunciadas a las fuerzas del orden u otras autoridades competentes cuando lo exija la ley."
  },
  fr: {
    "footer.links.legal.aup": "AUP",
    "aup.title": "Politique d'Utilisation Acceptable (AUP)",
    "aup.subtitle": "Politique d'Utilisation Acceptable",
    "aup.intro": "Cette Politique d'Utilisation Acceptable décrit les règles régissant l'utilisation de la plateforme d'IA d'Agent On Demand.",
    "aup.prohibited.title": "Actions Interdites",
    "aup.prohibited.intro": "Les utilisateurs s'engagent à ne pas utiliser les Services pour :",
    "aup.prohibited.item.law": "Violer toute loi ou réglementation applicable.",
    "aup.prohibited.item.fraud": "Participer à des fraudes, des escroqueries, du phishing ou des pratiques trompeuses.",
    "aup.prohibited.item.harass": "Harceler, menacer ou abuser des personnes.",
    "aup.prohibited.item.malware": "Distribuer des logiciels malveillants, des virus ou des logiciels nuisibles.",
    "aup.prohibited.item.marketing": "Envoyer des communications marketing non sollicitées ou illégales.",
    "aup.prohibited.item.ip": "Porter atteinte aux droits de propriété intellectuelle.",
    "aup.prohibited.item.content": "Générer ou distribuer du contenu illégal, diffamatoire, haineux ou discriminatoire.",
    "aup.prohibited.item.access": "Tenter un accès non autorisé aux systèmes ou aux comptes.",
    "aup.prohibited.item.interfere": "Interférer avec la sécurité, l'intégrité ou les performances de la plateforme.",
    "aup.prohibited.item.impersonate": "Utiliser la plateforme pour usurper l'identité d'une autre personne ou organisation sans autorisation.",
    "aup.calls.title": "Appels Vocaux IA",
    "aup.calls.intro": "Les clients sont responsables de :",
    "aup.calls.item.consent": "Obtenir tous les consentements de l'appelant légalement requis.",
    "aup.calls.item.laws": "Se conformer aux lois sur le télémarketing, la protection des consommateurs et l'enregistrement des appels.",
    "aup.calls.item.lawful": "Garantir que les interactions de l'IA sont légales et appropriées.",
    "aup.enforcement.title": "Application",
    "aup.enforcement.text1": "Agent On Demand se réserve le droit d'enquêter sur les violations de cette Politique et peut suspendre ou résilier des comptes sans préavis en cas d'utilisation abusive des Services.",
    "aup.enforcement.text2": "Les violations graves peuvent être signalées aux forces de l'ordre ou à d'autres autorités compétentes si la loi l'exige."
  },
  de: {
    "footer.links.legal.aup": "AUP",
    "aup.title": "Nutzungsrichtlinie (AUP)",
    "aup.subtitle": "Nutzungsrichtlinie",
    "aup.intro": "Diese Nutzungsrichtlinie beschreibt die Regeln für die Nutzung der KI-Plattform von Agent On Demand.",
    "aup.prohibited.title": "Verbotene Handlungen",
    "aup.prohibited.intro": "Nutzer stimmen zu, die Dienste nicht zu verwenden, um:",
    "aup.prohibited.item.law": "Gegen geltende Gesetze oder Vorschriften zu verstoßen.",
    "aup.prohibited.item.fraud": "Betrug, Scams, Phishing oder irreführende Praktiken zu betreiben.",
    "aup.prohibited.item.harass": "Personen zu belästigen, zu bedrohen oder zu missbrauchen.",
    "aup.prohibited.item.malware": "Schadsoftware, Viren oder böswillige Software zu verbreiten.",
    "aup.prohibited.item.marketing": "Unerwünschte oder rechtswidrige Marketingkommunikation zu senden.",
    "aup.prohibited.item.ip": "Rechte an geistigem Eigentum zu verletzen.",
    "aup.prohibited.item.content": "Rechtswidrige, verleumderische, hasserfüllte oder diskriminierende Inhalte zu erstellen oder zu verbreiten.",
    "aup.prohibited.item.access": "Unbefugten Zugriff auf Systeme oder Konten zu versuchen.",
    "aup.prohibited.item.interfere": "Die Sicherheit, Integrität oder Leistung der Plattform zu beeinträchtigen.",
    "aup.prohibited.item.impersonate": "Die Plattform zu nutzen, um sich unbefugt als eine andere Person oder Organisation auszugeben.",
    "aup.calls.title": "KI-Sprachanrufe",
    "aup.calls.intro": "Kunden sind verantwortlich für:",
    "aup.calls.item.consent": "Das Einholen aller gesetzlich erforderlichen Einwilligungen der Anrufer.",
    "aup.calls.item.laws": "Die Einhaltung von Gesetzen zu Telemarketing, Verbraucherschutz und Anrufaufzeichnung.",
    "aup.calls.item.lawful": "Die Sicherstellung, dass KI-Interaktionen rechtmäßig und angemessen sind.",
    "aup.enforcement.title": "Durchsetzung",
    "aup.enforcement.text1": "Agent On Demand behält sich das Recht vor, Verstöße gegen diese Richtlinie zu untersuchen, und kann Konten bei Missbrauch der Dienste fristlos sperren oder kündigen.",
    "aup.enforcement.text2": "Schwerwiegende Verstöße können den Strafverfolgungsbehörden oder anderen zuständigen Behörden gemeldet werden, sofern dies gesetzlich vorgeschrieben ist."
  }
};

for (const [lang, keys] of Object.entries(aupTranslations)) {
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
console.log("Successfully added AUP translations to translations.ts!");
