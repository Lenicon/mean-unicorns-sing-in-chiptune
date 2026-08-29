const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { minify } = require('terser');

const JS_FILES = [
  'src/js/inputs/keyboard.js',
  'src/js/sprites.js',
  'src/js/const.js',
  'src/js/stats.js',

  // MUSIC
  'src/js/music/songs/one.js',
  'src/js/music/songs/two.js',
  // 'src/js/music/songs/three.js',
  // 'src/js/music/songs/four.js',
  'src/js/music/songs/five.js',
  'src/js/music/songs/six.js',
  
  'src/js/music/audio.js',
  'src/js/music/song.js',
  'src/js/game.js',
  'src/js/ui.js',
  'src/js/grid.js',
  'src/js/game.js',
  'src/js/inputs/touch.js',
];

// Global states to track patterns across ALL song files
const patternVars = {};
const trackVars = {};
const pDeclarations = [];
const tDeclarations = [];
let pCount = 0;
let tCount = 0;

function extractPatterns(code) {
    // 1. Match Pattern Objects
    const patternRegex = /\{\s*t:\s*['"][a-zA-Z]+['"][^{}]*\}/g;
    
    code = code.replace(patternRegex, (match) => {
        const min = match.replace(/\s+/g, ''); 
        if (!patternVars[min]) {
            const varName = `p_${pCount++}`;
            patternVars[min] = varName;
            pDeclarations.push(`const ${varName} = ${match};`);
        }
        return patternVars[min];
    });

    // 2. Match Audio Track Objects
    const trackRegex = /\{\s*dur:\s*[^,]+,\s*wave:\s*['"][a-z]+['"],\s*vol:\s*[\d.]+,\s*drums:\s*['"][a-z]+['"],\s*lead:\s*\[[\s\S]*?\],\s*bass:\s*\[[\s\S]*?\]\s*\}/g;

    code = code.replace(trackRegex, (match) => {
        const min = match.replace(/\s+/g, ''); 
        if (!trackVars[min]) {
            const varName = `trk_${tCount++}`;
            trackVars[min] = varName;
            tDeclarations.push(`const ${varName} = ${match};`);
        }
        return trackVars[min];
    });

    return code; // Return the code WITH replacements, but NO declarations yet
}

async function build() {
  const { Packer } = await import('roadroller');

  
  console.log('Concatenating source files...');
  let rawJS = '';
  
  for (const file of JS_FILES) {
    if (!fs.existsSync(file)) {
      console.error(`File not found: ${file}`);
      return;
    }
    
    let fileCode = fs.readFileSync(file, 'utf8');
    
    // Process only the song files
    // if (file.includes('music/songs/')) {
    //     fileCode = extractPatterns(fileCode);
    // }
    
    rawJS += fileCode + '\n';
    // rawJS += '\n';
  }

  // Prepend ALL collected declarations once at the top of the bundled code
  let headers = '';
  if (pDeclarations.length > 0) headers += pDeclarations.join('\n') + '\n';
  if (tDeclarations.length > 0) headers += tDeclarations.join('\n') + '\n';
  
  rawJS = headers + rawJS;

  console.log('Minifying JS with Terser...');
  const terserResult = await minify(rawJS, {
    compress: {
      passes: 3,
      unsafe: true,
      unsafe_arrows: true,
      unsafe_comps: true,
      unsafe_math: true,
      unsafe_methods: true,
      booleans_as_integers: true,
      drop_console: true,
      toplevel: true,
    },
    mangle: {
      toplevel: true,
    },
    format: {
      comments: false,
    }
  });

  if (terserResult.error) {
    console.error('Terser Error:', terserResult.error);
    return;
  }

  console.log('Packing JS with Roadroller...');
  const packer = new Packer([{ data: terserResult.code, type: 'js', action: 'eval' }], {});
  await packer.optimize();
  
  const { firstLine, secondLine } = packer.makeDecoder();
  const packedJS = firstLine + secondLine;

  console.log('Processing CSS...');
  let css = '';
  if (fs.existsSync('src/style.css')) {
    css = fs.readFileSync('src/style.css', 'utf8')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\s+/g, ' ')
      .replace(/\s*([{}:;,])\s*/g, '$1')
      .trim();
  }

  console.log('Generating bundled dist/index.html...');
  let html = fs.readFileSync('src/index.html', 'utf8');
  html = html.replace(/<script src=".*?"><\/script>/g, '');
  html = html.replace(/<link[^>]*rel="stylesheet"[^>]*>/gi, '');

  if (css) html = html.replace('</head>', `<style>${css}</style></head>`);
  html = html.replace('</body>', `<script>${packedJS}</script></body>`);

  html = html.replace(/\s+/g, ' ').replace(/> </g, '><');

  if (!fs.existsSync('dist')) fs.mkdirSync('dist');
  const htmlPath = path.join('dist', 'index.html');
  const zipPath = path.join('dist', 'game.zip');

  fs.writeFileSync(htmlPath, html);

  if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);

  console.log('Invoking native ECT CLI for maximum ZIP compression...');

  const ectCmd = fs.existsSync('./ect.exe') 
    ? './ect.exe' 
    : (fs.existsSync('./ect') ? './ect' : 'ect');

  try {
    execFileSync(ectCmd, ['-9', '-strip', '-zip', zipPath, htmlPath]);

    const size = fs.statSync(zipPath).size;
    const limit = 13312;
    const pct = ((size / limit) * 100).toFixed(1);

    console.log(`\nBuild successful!`);
    console.log(`Output: ${zipPath} (${size} / ${limit} bytes — ${pct}% budget used)`);
  } catch (err) {
    console.error('\nCould not run ECT binary.');
    console.error('Make sure ect.exe is saved directly in your project root folder.');
  }
}

build();