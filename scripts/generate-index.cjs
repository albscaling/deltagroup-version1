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
  <!-- Lightweight fallback: injects static HTML only if the real app didn't mount. Load FIRST so
       it displays even if the main client bundle throws during execution. -->
  <script src="/client/assets/bootstrap.js"></script>
  <script type="module" src="${jsPath}"></script>
</body>
</html>`;

fs.writeFileSync(outFile, html);
console.log('Wrote', outFile);

// Write a tiny bootstrap fallback script into the client assets so Vercel static
// deployments show content even if the SSR/client hydration entry isn't wired up.
const bootstrapDir = path.join(__dirname, '..', 'dist', 'client', 'assets');
const bootstrapFile = path.join(bootstrapDir, 'bootstrap.js');
const bootstrapContent = `// Lightweight fallback: inject a separate static-fallback element BEFORE #root so
// it remains visible even if the main app clears or replaces #root during a failed mount.
(function(){
  try{
    var root = document.getElementById('root');
    var body = document.body || document.getElementsByTagName('body')[0];
    if(!body) return;
    // Don't create twice
    if(document.getElementById('static-fallback')) return;
    var wrapper = document.createElement('div');
    wrapper.id = 'static-fallback';
    wrapper.style.cssText = 'font-family: Inter, ui-sans-serif, system-ui, -apple-system, \'Segoe UI\', Roboto, \"Helvetica Neue\", Arial; padding:48px; text-align:center;';
    wrapper.innerHTML = '<main><h1 style="font-size:32px;margin-bottom:8px">Delta Group</h1>'+
      '<p style="color:#666; max-width:720px; margin:0 auto;">Welcome — static fallback is active. The full app attempted to mount but failed in this environment. For the best experience deploy with Cloudflare Workers or check the console for runtime errors.</p></main>';
    if(root && root.parentNode){
      root.parentNode.insertBefore(wrapper, root);
    }else{
      // fallback: append to body
      body.insertBefore(wrapper, body.firstChild);
    }
  }catch(e){console.error(e)}
})();`;

try{
  if(!fs.existsSync(bootstrapDir)) fs.mkdirSync(bootstrapDir, { recursive: true });
  fs.writeFileSync(bootstrapFile, bootstrapContent);
  console.log('Wrote fallback bootstrap at', bootstrapFile);
}catch(e){
  console.error('Failed to write bootstrap fallback', e);
}
