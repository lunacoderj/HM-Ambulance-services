const fs = require('fs');
const path = require('path');

function lazyLoadImages(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      lazyLoadImages(fullPath);
    } else if (fullPath.match(/\.tsx$/i)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;
      
      // Skip Logo.tsx as it is above the fold usually
      if (file === 'Logo.tsx' || file === 'Hero.tsx') {
         continue;
      }
      
      content = content.replace(/<img(?![^>]*loading)/g, '<img loading="lazy" decoding="async"');
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Added lazy loading to ${file}`);
      }
    }
  }
}

lazyLoadImages(path.join(__dirname, 'src'));
console.log('Lazy loading applied.');
