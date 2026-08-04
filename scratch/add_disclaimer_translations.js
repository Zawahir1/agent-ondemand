const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const disclaimerTranslations = {
  en: {
    "footer.links.legal.disclaimer": "Disclaimer",
    "disclaimer.title": "Disclaimer",
    "disclaimer.subtitle": "Disclaimer for Agent On Demand",
    "disclaimer.intro.welcome": "The information, software, AI-generated content, voice responses, automation, and Services provided by Agent On Demand are offered on an \"as is\" and \"as available\" basis.",
    "disclaimer.intro.agreement": "While we strive to deliver reliable and accurate AI-powered solutions, we make no warranties or guarantees regarding the completeness, accuracy, reliability, availability, or suitability of any AI-generated response or Service.",
    "disclaimer.section.1.title": "AI-Generated Content",
    "disclaimer.section.1.text": "Our AI agents generate responses based on available information and configured workflows. AI responses may occasionally contain inaccuracies, omissions, or misunderstandings. Customers are responsible for reviewing AI outputs before relying on them for legal, financial, medical, employment, or other important decisions.",
    "disclaimer.section.2.title": "No Professional Advice",
    "disclaimer.section.2.text": "Our Services do not constitute legal, financial, tax, accounting, medical, or other professional advice. Users should consult qualified professionals before making decisions based on AI-generated information.",
    "disclaimer.section.3.title": "Third-Party Services",
    "disclaimer.section.3.text": "Our platform integrates with third-party software and communication providers. We are not responsible for the availability, performance, security, or content of third-party services.",
    "disclaimer.section.4.title": "Limitation of Liability",
    "disclaimer.section.4.text": "To the fullest extent permitted by law, Agent On Demand shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from the use or inability to use our Services. Your use of our Services is at your own risk."
  },
  it: {
    "footer.links.legal.disclaimer": "Esclusione di responsabilità",
    "disclaimer.title": "Esclusione di responsabilità",
    "disclaimer.subtitle": "Esclusione di responsabilità per Agent On Demand",
    "disclaimer.intro.welcome": "Le informazioni, il software, i contenuti generati dall'AI, le risposte vocali, l'automazione e i Servizi forniti da Agent On Demand sono offerti \"così come sono\" e \"come disponibili\".",
    "disclaimer.intro.agreement": "Sebbene ci impegniamo a fornire soluzioni affidabili e accurate basate sull'intelligenza artificiale, non forniamo alcuna garanzia in merito alla completezza, accuratezza, affidabilità, disponibilità o idoneità di qualsiasi risposta o Servizio generato dall'AI.",
    "disclaimer.section.1.title": "Contenuto generato dall'AI",
    "disclaimer.section.1.text": "I nostri agenti AI generano risposte in base alle informazioni disponibili e ai flussi di lavoro configurati. Le risposte dell'AI possono occasionalmente contenere imprecisioni, omissioni o malintesi. I clienti sono responsabili dell'esame degli output dell'AI prima di fare affidamento su di essi per decisioni legali, finanziarie, mediche, lavorative o altre decisioni importanti.",
    "disclaimer.section.2.title": "Nessuna consulenza professionale",
    "disclaimer.section.2.text": "I nostri Servizi non costituiscono consulenza legale, finanziaria, fiscale, contabile, medica o di altro tipo professionale. Gli utenti devono consultare professionisti qualificati prima di prendere decisioni basate su informazioni generate dall'AI.",
    "disclaimer.section.3.title": "Servizi di terze parti",
    "disclaimer.section.3.text": "La nostra piattaforma si integra con software e fornitori di comunicazioni di terze parti. Non siamo responsabili della disponibilità, delle prestazioni, della sicurezza o del contenuto dei servizi di terze parti.",
    "disclaimer.section.4.title": "Limitazione di responsabilità",
    "disclaimer.section.4.text": "Nella misura massima consentita dalla legge, Agent On Demand non sarà responsabile per eventuali danni diretti, indiretti, incidentali, consequenziali o speciali derivanti dall'uso o dall'impossibilità di utilizzare i nostri Servizi. L'uso dei nostri Servizi è a vostro proprio rischio."
  },
  es: {
    "footer.links.legal.disclaimer": "Descargo de responsabilidad",
    "disclaimer.title": "Descargo de responsabilidad",
    "disclaimer.subtitle": "Descargo de responsabilidad para Agent On Demand",
    "disclaimer.intro.welcome": "La información, el software, el contenido generado por IA, las respuestas de voz, la automatización y los Servicios proporcionados por Agent On Demand se ofrecen \"tal cual\" y \"según disponibilidad\".",
    "disclaimer.intro.agreement": "Si bien nos esforzamos por ofrecer soluciones confiables y precisas basadas en IA, no ofrecemos garantías de ningún tipo sobre la integridad, precisión, confiabilidad, disponibilidad o idoneidad de cualquier respuesta o Servicio generado por IA.",
    "disclaimer.section.1.title": "Contenido Generado por IA",
    "disclaimer.section.1.text": "Nuestros agentes de IA generan respuestas basadas en la información disponible y los flujos de trabajo configurados. Las respuestas de IA pueden contener imprecisiones, omisiones o malentendidos ocasionales. Los clientes son responsables de revisar los resultados de la IA antes de confiar en ellos para decisiones legales, financieras, médicas, de empleo u otras decisiones importantes.",
    "disclaimer.section.2.title": "Sin Asesoramiento Profesional",
    "disclaimer.section.2.text": "Nuestros Servicios no constituyen asesoramiento legal, financiero, fiscal, contable, médico u otro tipo de asesoramiento profesional. Los usuarios deben consultar a profesionales calificados antes de tomar decisiones basadas en información generada por IA.",
    "disclaimer.section.3.title": "Servicios de Terceros",
    "disclaimer.section.3.text": "Nuestra plataforma se integra con software y proveedores de comunicación de terceros. No somos responsables de la disponibilidad, el rendimiento, la seguridad o el contenido de los servicios de terceros.",
    "disclaimer.section.4.title": "Limitación de Responsabilidad",
    "disclaimer.section.4.text": "En la medida de lo permitido por la ley, Agent On Demand no será responsable de ningún daño directo, indirecto, incidental, consecuente o especial que surja del uso o la imposibilidad de usar nuestros Servicios. El uso de nuestros Servicios es bajo su propio riesgo."
  },
  fr: {
    "footer.links.legal.disclaimer": "Clause de non-responsabilité",
    "disclaimer.title": "Clause de non-responsabilité",
    "disclaimer.subtitle": "Clause de non-responsabilité pour Agent On Demand",
    "disclaimer.intro.welcome": "Les informations, logiciels, contenus générés par l'IA, réponses vocales, automatisations et Services fournis par Agent On Demand sont proposés \"en l'état\" et \"selon disponibilité\".",
    "disclaimer.intro.agreement": "Bien que nous nous efforcions de fournir des solutions fiables et précises alimentées par l'IA, nous n'offrons aucune garantie quant à l'exhaustivité, l'exactitude, la fiabilité, la disponibilité ou l'adéquation de toute réponse ou Service généré par l'IA.",
    "disclaimer.section.1.title": "Contenu Généré par l'IA",
    "disclaimer.section.1.text": "Nos agents d'IA génèrent des réponses basées sur les informations disponibles et les flux de travail configurés. Les réponses de l'IA peuvent occasionnellement contenir des inexactitudes, des omissions ou des malentendus. Les clients sont responsables de l'examen des résultats de l'IA avant de s'y fier pour des décisions juridiques, financières, médicales, professionnelles ou autres décisions importantes.",
    "disclaimer.section.2.title": "Aucun Conseil Professionnel",
    "disclaimer.section.2.text": "Nos Services ne constituent pas des conseils juridiques, financiers, fiscaux, comptables, médicaux ou autres conseils professionnels. Les utilisateurs doivent consulter des professionnels qualifiés avant de prendre des décisions basées sur des informations générées par l'IA.",
    "disclaimer.section.3.title": "Services Tiers",
    "disclaimer.section.3.text": "Notre plateforme s'intègre à des logiciels et fournisseurs de communication tiers. Nous ne sommes pas responsables de la disponibilité, des performances, de la sécurité ou du contenu des services tiers.",
    "disclaimer.section.4.title": "Limitation de Responsabilité",
    "disclaimer.section.4.text": "Dans toute la mesure permise par la loi, Agent On Demand ne sera pas responsable des dommages directs, indirects, accessoires, consécutifs ou spéciaux découlant de l'utilisation ou de l'impossibilité d'utiliser nos Services. Votre utilisation de nos Services est à vos risques et périls."
  },
  de: {
    "footer.links.legal.disclaimer": "Haftungsausschluss",
    "disclaimer.title": "Haftungsausschluss",
    "disclaimer.subtitle": "Haftungsausschluss für Agent On Demand",
    "disclaimer.intro.welcome": "Die von Agent On Demand bereitgestellten Informationen, Software, KI-generierten Inhalte, Sprachantworten, Automatisierungen und Dienste werden ohne Mängelgewähr („as is“) und nach Verfügbarkeit („as available“) bereitgestellt.",
    "disclaimer.intro.agreement": "Obwohl wir uns um zuverlässige und genaue KI-gestützte Lösungen bemühen, geben wir keine Garantien hinsichtlich der Vollständigkeit, Genauigkeit, Zuverlässigkeit, Verfügbarkeit oder Eignung von KI-generierten Antworten oder Diensten ab.",
    "disclaimer.section.1.title": "KI-generierte Inhalte",
    "disclaimer.section.1.text": "Unsere KI-Agenten generieren Antworten auf der Grundlage verfügbarer Informationen und konfigurierter Workflows. KI-Antworten können gelegentlich Ungenauigkeiten, Auslassungen oder Missverständnisse enthalten. Kunden sind dafür verantwortlich, KI-Ergebnisse zu überprüfen, bevor sie sich bei rechtlichen, finanziellen, medizinischen, beruflichen oder anderen wichtigen Entscheidungen auf sie verlassen.",
    "disclaimer.section.2.title": "Keine professionelle Beratung",
    "disclaimer.section.2.text": "Unsere Dienste stellen keine rechtliche, finanzielle, steuerliche, buchhalterische, medizinische oder sonstige professionelle Beratung dar. Nutzer sollten qualifizierte Fachkräfte konsultieren, bevor sie Entscheidungen auf der Grundlage von KI-generierten Informationen treffen.",
    "disclaimer.section.3.title": "Dienste von Drittanbietern",
    "disclaimer.section.3.text": "Unsere Plattform ist in Software und Kommunikationsanbieter von Drittanbietern integriert. Wir sind nicht verantwortlich für die Verfügbarkeit, Leistung, Sicherheit oder Inhalte von Diensten von Drittanbietern.",
    "disclaimer.section.4.title": "Haftungsbeschränkung",
    "disclaimer.section.4.text": "Soweit gesetzlich zulässig, haftet Agent On Demand nicht für direkte, indirekte, zufällige, Neben- oder Folgeschäden, die aus der Nutzung oder der Unmöglichkeit der Nutzung unserer Dienste entstehen. Die Nutzung unserer Dienste erfolgt auf eigene Gefahr."
  }
};

for (const [lang, keys] of Object.entries(disclaimerTranslations)) {
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
console.log("Successfully added Disclaimer translations to translations.ts!");
