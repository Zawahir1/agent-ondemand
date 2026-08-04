const fs = require('fs');

const filePath = 'c:/Users/CTO/Desktop/Projects/Agent On Demand/artisan-clone/locales/translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Replace both variants
content = content.replace(/support@agent-ondemand\.com/g, 'marco.ferrario@agent-ondemand.com');
content = content.replace(/support@agentondemand\.com/g, 'marco.ferrario@agent-ondemand.com');

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully replaced support emails in translations.ts!");
