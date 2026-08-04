const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const targetReplacements = {
  en: {
    "nav.startTrial": "Sign up for free",
    "pricing.plan.starter.cta": "Sign up for free",
    "pricing.plan.growth.cta": "Sign up for free",
    "footer.cta.button": "Sign up for free",
    "auth.receptionist.btn.signup": "Sign up for free",
    "auth.realestate.btn.signup": "Sign up for free"
  },
  it: {
    "nav.startTrial": "Registrati gratis",
    "pricing.plan.starter.cta": "Registrati gratis",
    "pricing.plan.growth.cta": "Registrati gratis",
    "footer.cta.button": "Registrati gratis",
    "auth.receptionist.btn.signup": "Registrati gratis",
    "auth.realestate.btn.signup": "Registrati gratis"
  },
  es: {
    "nav.startTrial": "Regístrate gratis",
    "pricing.plan.starter.cta": "Regístrate gratis",
    "pricing.plan.growth.cta": "Regístrate gratis",
    "footer.cta.button": "Regístrate gratis",
    "auth.receptionist.btn.signup": "Regístrate gratis",
    "auth.realestate.btn.signup": "Regístrate gratis"
  },
  fr: {
    "nav.startTrial": "S'inscrire gratuitement",
    "pricing.plan.starter.cta": "S'inscrire gratuitement",
    "pricing.plan.growth.cta": "S'inscrire gratuitement",
    "footer.cta.button": "S'inscrire gratuitement",
    "auth.receptionist.btn.signup": "S'inscrire gratuitement",
    "auth.realestate.btn.signup": "S'inscrire gratuitement"
  },
  de: {
    "nav.startTrial": "Kostenlos registrieren",
    "pricing.plan.starter.cta": "Kostenlos registrieren",
    "pricing.plan.growth.cta": "Kostenlos registrieren",
    "footer.cta.button": "Kostenlos registrieren",
    "auth.receptionist.btn.signup": "Kostenlos registrieren",
    "auth.realestate.btn.signup": "Kostenlos registrieren"
  }
};

const lines = content.split('\n');
let currentLang = '';
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const langMatch = /^\s*"([a-z]{2})":\s*\{/.exec(line);
  if (langMatch) {
    currentLang = langMatch[1];
  }
  if (currentLang && targetReplacements[currentLang]) {
    // Check if the line has any of the keys
    for (const [k, v] of Object.entries(targetReplacements[currentLang])) {
      const regex = new RegExp(`"${k}":\\s*"[^"]*"`);
      if (regex.test(line)) {
        const indent = line.match(/^\s*/)[0];
        // Retain any trailing comma
        const hasComma = line.trim().endsWith(',');
        lines[i] = `${indent}"${k}": "${v}"${hasComma ? ',' : ''}`;
      }
    }
  }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log("Successfully replaced Start free trial with Sign up for free translations!");
