// save as fix-to-relative-img-paths.js in your project root
const fs = require('fs');
const path = require('path');

const folderToFix = './';  // adjust if needed
const exts = ['.vue', '.html', '.md'];

function walk(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (exts.includes(path.extname(file))) {
      let content = fs.readFileSync(fullPath, 'utf8');

      // Replace src="/img/ to src="img/ (remove leading slash to make path relative)
      const newContent = content.replace(/src="\/img\//g, 'src="img/');

      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated image paths in: ${fullPath}`);
      }
    }
  });
}

walk(folderToFix);
console.log('Image paths updated to relative.');
