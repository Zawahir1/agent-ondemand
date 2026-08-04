const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const privacyTranslations = {
  en: {
    "meet.form.privacy.agree": "I accept the",
    "meet.form.privacy.and": "and"
  },
  it: {
    "meet.form.privacy.agree": "Accetto la",
    "meet.form.privacy.and": "e"
  },
  es: {
    "meet.form.privacy.agree": "Acepto la",
    "meet.form.privacy.and": "y"
  },
  fr: {
    "meet.form.privacy.agree": "J'accepte la",
    "meet.form.privacy.and": "et"
  },
  de: {
    "meet.form.privacy.agree": "Ich akzeptiere die",
    "meet.form.privacy.and": "und"
  }
};

for (const [lang, keys] of Object.entries(privacyTranslations)) {
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
console.log("Successfully added privacy.agree and privacy.and keys to translations.ts!");
