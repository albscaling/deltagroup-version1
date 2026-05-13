const fs = require('fs');
const path = require('path');

const clientDir = path.join(__dirname, '..', 'dist', 'client', 'assets');
const outFile = path.join(__dirname, '..', 'dist', 'index.html');

if (!fs.existsSync(clientDir)) {
  console.error('client assets directory not found:', clientDir);
  process.exit(1);
}

const files = fs.readdirSync(clientDir);

// choose the main index JS by filename that starts with index- or index.
const jsFile = files.find(f => /^index(-|\.|_).+\.js$/.test(f) || /^index\.js$/.test(f));
const cssFile = files.find(f => /^styles(-|\.|_).+\.css$/.test(f) || /^styles\.css$/.test(f));

if (!jsFile) {
  console.error('Could not find client index JS in', clientDir);
  process.exit(1);
}

const jsPath = path.posix.join('/client/assets', jsFile);
const cssPath = cssFile ? path.posix.join('/client/assets', cssFile) : null;

const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Delta Group</title>
  ${cssPath ? `<link rel="stylesheet" href="${cssPath}">` : ''}
</head>
<body>
  <div id="root"></div>
  <script type="module" src="${jsPath}"></script>
</body>
</html>`;

fs.writeFileSync(outFile, html);
console.log('Wrote', outFile);
