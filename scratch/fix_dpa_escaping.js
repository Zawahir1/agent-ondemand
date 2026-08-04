const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

// The English, Italian, Spanish, French, German strings for dpa.agreement have raw unescaped "DPA" etc.
// Let's replace the line for "dpa.agreement" in each language block.

const agreements = {
  en: '"dpa.agreement": \'This Data Processing Addendum ("DPA") forms part of the agreement between Agent On Demand ("Processor") and the customer ("Controller") regarding the processing of personal data through the Services.\',',
  it: '"dpa.agreement": \'Il presente Addendum sul Trattamento dei Dati ("DPA") costituisce parte integrante dell\\\'accordo tra Agent On Demand ("Responsabile") e il cliente ("Titolare") in merito al trattamento dei dati personali attraverso i Servizi.\',',
  es: '"dpa.agreement": \'Este Anexo de Procesamiento de Datos ("DPA") forma parte del acuerdo entre Agent On Demand ("Encargado") y el cliente ("Responsable") con respecto al procesamiento de datos personales a través de los Servicios.\',',
  fr: '"dpa.agreement": \'Cet Accord de Traitement des Données ("DPA") fait partie de l\\\'accord entre Agent On Demand ("Sous-traitant") et le client ("Responsable du traitement") concernant le traitement des données personnelles via les Services.\',',
  de: '"dpa.agreement": \`Dieser Auftragsverarbeitungsvertrag („AVV“) ist Teil der Vereinbarung zwischen Agent On Demand („Auftragsverarbeiter“) und dem Kunden („Verantwortlicher“) bezüglich der Verarbeitung personenbezogener Daten durch die Dienste.\`,'
};

const lines = content.split('\n');
let currentLang = '';
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const langMatch = /^\s*"([a-z]{2})":\s*\{/.exec(line);
  if (langMatch) {
    currentLang = langMatch[1];
  }
  if (line.includes('"dpa.agreement":')) {
    if (agreements[currentLang]) {
      // Find indentation of the line
      const indent = line.match(/^\s*/)[0];
      lines[i] = indent + agreements[currentLang];
    }
  }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log("Successfully fixed DPA agreement escaping in translations.ts!");
