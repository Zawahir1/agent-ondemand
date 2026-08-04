const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const seoTranslations = {
  en: {
    "dpa.meta.title": "Data Processing Addendum (DPA) | Agent On Demand",
    "dpa.meta.desc": "Read Agent On Demand's Data Processing Addendum, outlining how customer and caller data is processed, stored, and protected under our services."
  },
  it: {
    "dpa.meta.title": "Addendum sul Trattamento dei Dati (DPA) | Agent On Demand",
    "dpa.meta.desc": "Leggi l'Addendum sul trattamento dei dati (DPA) di Agent On Demand, che descrive come i dati dei clienti vengono elaborati, archiviati e protetti."
  },
  es: {
    "dpa.meta.title": "Anexo de Procesamiento de Datos (DPA) | Agent On Demand",
    "dpa.meta.desc": "Lea el Anexo de procesamiento de datos (DPA) de Agent On Demand, que describe cómo se procesan, almacenan y protegen los datos de los clientes."
  },
  fr: {
    "dpa.meta.title": "Accord de Traitement des Données (DPA) | Agent On Demand",
    "dpa.meta.desc": "Lisez l'Accord de traitement des données (DPA) d'Agent On Demand, détaillant comment les données clients sont traitées, stockées et protégées."
  },
  de: {
    "dpa.meta.title": "Auftragsverarbeitungsvertrag (AVV) | Agent On Demand",
    "dpa.meta.desc": "Lesen Sie den Auftragsverarbeitungsvertrag (AVV) von Agent On Demand, der regelt, wie Kundendaten verarbeitet, gespeichert und geschützt werden."
  }
};

for (const [lang, keys] of Object.entries(seoTranslations)) {
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
console.log("Successfully added dpa SEO translations to translations.ts!");
