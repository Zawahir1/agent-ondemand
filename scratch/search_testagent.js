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
for (const file of allFiles) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('<TestAgent')) {
      console.log(`Found <TestAgent in file: ${file}`);
    }
  } catch (err) { }
}
