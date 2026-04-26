const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.vue') || filePath.endsWith('.css') || filePath.endsWith('.js') || filePath.endsWith('.html')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Replace colors
    content = content.replace(/#d4af37/gi, '#c77d46');
    content = content.replace(/#f4e4bc/gi, '#e6b999');
    content = content.replace(/rgba\(212,\s*175,\s*55/gi, 'rgba(199, 125, 70');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated colors in: ' + filePath);
    }
  }
});
