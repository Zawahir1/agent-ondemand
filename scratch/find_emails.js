const fs = require('fs');
const path = require('path');

function getFiles(dir, files_ = []) {
  const files = fs.readdirSync(dir);
  for (const i in files) {
    const name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()) {
      if (!name.includes('node_modules') && !name.includes('.next') && !name.includes('.git') && !name.includes('scratch')) {
        getFiles(name, files_);
      }
    } else {
      files_.push(name);
    }
  }
  return files_;
}

const allFiles = getFiles('.');
console.log(`Scanning ${allFiles.length} files...`);

const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/g;

for (const file of allFiles) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = emailRegex.exec(content)) !== null) {
      console.log(`Found email "${match[0]}" in file: ${file}:${content.substring(0, match.index).split('\n').length}`);
    }
  } catch (err) {
    // Ignore binary/error files
  }
}
