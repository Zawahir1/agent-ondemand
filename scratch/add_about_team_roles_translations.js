const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

const rolesTranslations = {
  en: {
    "about.team.role.ceo": "CEO & Co-founder",
    "about.team.role.cto": "CTO & Co-founder",
    "about.team.role.product": "Head of Product",
    "about.team.role.engineering": "Head of Engineering",
    "about.team.role.marketing": "Head of Marketing",
    "about.team.role.sales": "Head of Sales"
  },
  it: {
    "about.team.role.ceo": "CEO e cofondatore",
    "about.team.role.cto": "CTO e cofondatore",
    "about.team.role.product": "Direttore di Prodotto",
    "about.team.role.engineering": "Responsabile dell'Ingegneria",
    "about.team.role.marketing": "Responsabile del Marketing",
    "about.team.role.sales": "Responsabile delle Vendite"
  },
  es: {
    "about.team.role.ceo": "CEO y cofundador",
    "about.team.role.cto": "CTO y cofundador",
    "about.team.role.product": "Director de Producto",
    "about.team.role.engineering": "Director de Ingeniería",
    "about.team.role.marketing": "Director de Marketing",
    "about.team.role.sales": "Director de Ventas"
  },
  fr: {
    "about.team.role.ceo": "PDG & cofondateur",
    "about.team.role.cto": "Directeur technique & cofondateur",
    "about.team.role.product": "Directeur Produit",
    "about.team.role.engineering": "Directeur de l'Ingénierie",
    "about.team.role.marketing": "Directeur du Marketing",
    "about.team.role.sales": "Directeur des Ventes"
  },
  de: {
    "about.team.role.ceo": "CEO & Mitgründer",
    "about.team.role.cto": "CTO & Mitgründer",
    "about.team.role.product": "Produktleiter",
    "about.team.role.engineering": "Leiter der Technik",
    "about.team.role.marketing": "Marketingleiter",
    "about.team.role.sales": "Vertriebsleiter"
  }
};

for (const [lang, keys] of Object.entries(rolesTranslations)) {
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
console.log("Successfully added about page roles to translations.ts!");
