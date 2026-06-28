const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public/images');
const srcDir = path.join(__dirname, 'src');

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      await processDirectory(fullPath);
    } else if (fullPath.match(/\.(png|jpg|jpeg)$/i)) {
      const webpPath = fullPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      
      try {
        await sharp(fullPath)
          .webp({ quality: 75 })
          .toFile(webpPath);
          
        console.log(`Converted ${file} to WebP`);
        fs.unlinkSync(fullPath);
      } catch (err) {
        console.error(`Failed converting ${file}`, err);
      }
    }
  }
}

function updateReferences(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      updateReferences(fullPath);
    } else if (fullPath.match(/\.(ts|tsx|css|json)$/i)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;
      // Note: Only replace if it looks like an image path
      content = content.replace(/\.png|\.jpg|\.jpeg/gi, '.webp');
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated references in ${file}`);
      }
    }
  }
}

async function run() {
  console.log('Starting conversion...');
  await processDirectory(dir);
  console.log('Updating source references...');
  updateReferences(srcDir);
  console.log('Done.');
}

run();
