import sharp from 'sharp';
import { writeFileSync } from 'fs';

const OUT = 'D:/code/diete-slabit/public/decor/';

/* ─────────────────────────────────────────────────────────────
   ALIMENTE.JPG (612x612) — roata cu 5 grupe alimentare
   Text de înlocuit (pe inelul exterior al roții):
     Grain Foods          → Cereale
     Vegetables and Beans → Legume și fasole
     Dairy Foods          → Lactate
     Lean Meats, Fish and Poultry → Carne, Pește
     Fruits               → Fructe
───────────────────────────────────────────────────────────── */

const svgAlimente = `<svg width="612" height="612" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- calea circulara pentru textul curbat -->
    <path id="arc-sus-stg" d="M 100,306 A 206,206 0 0,1 306,100"/>
    <path id="arc-sus-dr"  d="M 306,100 A 206,206 0 0,1 512,306"/>
    <path id="arc-jos"     d="M 160,460 A 206,206 0 0,0 452,460"/>
    <path id="arc-stg"     d="M 100,380 A 206,206 0 0,1 100,232"/>
    <path id="arc-dr"      d="M 512,232 A 206,206 0 0,1 512,380"/>
  </defs>

  <!-- Acoperire Grain Foods (stanga-sus, portocaliu) -->
  <rect x="58" y="80" width="190" height="32" rx="6" fill="#e8a020" opacity="0.97"/>
  <text x="153" y="101" font-family="Arial,sans-serif" font-size="16" font-weight="bold"
        fill="white" text-anchor="middle">Cereale și pâine</text>

  <!-- Acoperire Vegetables and Beans (dreapta-sus, verde) -->
  <rect x="370" y="60" width="200" height="40" rx="6" fill="#4a9a30" opacity="0.97"/>
  <text x="470" y="85" font-family="Arial,sans-serif" font-size="14" font-weight="bold"
        fill="white" text-anchor="middle">Legume și fasole</text>

  <!-- Acoperire Dairy Foods (stanga-jos, albastru) -->
  <rect x="30" y="395" width="160" height="30" rx="6" fill="#5090c8" opacity="0.97"/>
  <text x="110" y="415" font-family="Arial,sans-serif" font-size="14" font-weight="bold"
        fill="white" text-anchor="middle">Lactate</text>

  <!-- Acoperire Lean Meats Fish and Poultry (jos, roz/rosu) -->
  <rect x="140" y="558" width="330" height="32" rx="6" fill="#d04060" opacity="0.97"/>
  <text x="305" y="579" font-family="Arial,sans-serif" font-size="14" font-weight="bold"
        fill="white" text-anchor="middle">Carne slabă, Pește și Pasăre</text>

  <!-- Acoperire Fruits (dreapta-jos, verde deschis) -->
  <rect x="430" y="395" width="150" height="30" rx="6" fill="#70b840" opacity="0.97"/>
  <text x="505" y="415" font-family="Arial,sans-serif" font-size="14" font-weight="bold"
        fill="white" text-anchor="middle">Fructe</text>
</svg>`;

/* ─────────────────────────────────────────────────────────────
   ALIMENTE2.JPG (1300x1347) — Balanced Diet / vitamine
   - Centru: acoperire text engleza + traducere
   - Jos: crop watermark (ultimele ~95px)
───────────────────────────────────────────────────────────── */
const cropH2 = 1347 - 95; // taiem 95px jos

const svgAlimente2 = `<svg width="1300" height="${cropH2}" xmlns="http://www.w3.org/2000/svg">
  <!-- Acoperire cerc central cu text engleza -->
  <ellipse cx="650" cy="668" rx="148" ry="110" fill="#fff8f0" opacity="0.97"/>
  <!-- Text roman in centru -->
  <text x="650" y="642" font-family="Arial,sans-serif" font-size="22" font-weight="normal"
        fill="#c8a000" text-anchor="middle" letter-spacing="1">SURSE ALIMENTARE</text>
  <text x="650" y="678" font-family="Arial,sans-serif" font-size="30" font-weight="bold"
        fill="#228040" text-anchor="middle">DIETĂ</text>
  <text x="650" y="712" font-family="Arial,sans-serif" font-size="30" font-weight="bold"
        fill="#228040" text-anchor="middle">ECHILIBRATĂ</text>
  <text x="650" y="742" font-family="Arial,sans-serif" font-size="20" font-weight="normal"
        fill="#c8a000" text-anchor="middle" letter-spacing="1">TABEL VITAMINE</text>
</svg>`;

/* ─────────────────────────────────────────────────────────────
   ALIMENTE3.JPG (498x500) — roata macronutrienti
   Text de înlocuit: fruits, complex carbohydrates,
                     vegetables, proteins, oils
───────────────────────────────────────────────────────────── */
const svgAlimente3 = `<svg width="498" height="500" xmlns="http://www.w3.org/2000/svg">
  <!-- Acoperire "fruits" (stanga-sus) -->
  <rect x="42" y="65" width="110" height="26" rx="5" fill="#f8f8f8" opacity="0.95"/>
  <text x="97" y="83" font-family="Arial,sans-serif" font-size="15" font-weight="bold"
        fill="#1a1a1a" text-anchor="middle">fructe</text>

  <!-- Acoperire "complex carbohydrates" (dreapta-sus) -->
  <rect x="280" y="42" width="200" height="44" rx="5" fill="#f8f8f8" opacity="0.95"/>
  <text x="380" y="60" font-family="Arial,sans-serif" font-size="13" font-weight="bold"
        fill="#1a1a1a" text-anchor="middle">carbohidrați</text>
  <text x="380" y="78" font-family="Arial,sans-serif" font-size="13" font-weight="bold"
        fill="#1a1a1a" text-anchor="middle">complecși</text>

  <!-- Acoperire "vegetables" (stanga-jos, textul e rotit/inversat) -->
  <rect x="30" y="330" width="130" height="26" rx="5" fill="#f8f8f8" opacity="0.95"/>
  <text x="95" y="348" font-family="Arial,sans-serif" font-size="15" font-weight="bold"
        fill="#1a1a1a" text-anchor="middle">legume</text>

  <!-- Acoperire "proteins" (dreapta-jos) -->
  <rect x="350" y="330" width="120" height="26" rx="5" fill="#f8f8f8" opacity="0.95"/>
  <text x="410" y="348" font-family="Arial,sans-serif" font-size="15" font-weight="bold"
        fill="#1a1a1a" text-anchor="middle">proteine</text>

  <!-- Acoperire "oils" (centru) -->
  <rect x="196" y="222" width="106" height="26" rx="5" fill="#f8f8f8" opacity="0.95"/>
  <text x="249" y="240" font-family="Arial,sans-serif" font-size="15" font-weight="bold"
        fill="#1a1a1a" text-anchor="middle">uleiuri</text>
</svg>`;

// ── Procesare ────────────────────────────────────────────────

// alimente.jpg
await sharp(OUT + 'alimente.jpg')
  .composite([{ input: Buffer.from(svgAlimente), blend: 'over' }])
  .jpeg({ quality: 92 })
  .toFile(OUT + 'alimente_ro.jpg');
console.log('✓ alimente_ro.jpg');

// alimente2.jpg — crop + overlay
await sharp(OUT + 'alimente2.jpg')
  .extract({ left: 0, top: 0, width: 1300, height: cropH2 })
  .composite([{ input: Buffer.from(svgAlimente2), blend: 'over' }])
  .jpeg({ quality: 92 })
  .toFile(OUT + 'alimente2_ro.jpg');
console.log('✓ alimente2_ro.jpg');

// alimente3.jpg
await sharp(OUT + 'alimente3.jpg')
  .composite([{ input: Buffer.from(svgAlimente3), blend: 'over' }])
  .jpeg({ quality: 92 })
  .toFile(OUT + 'alimente3_ro.jpg');
console.log('✓ alimente3_ro.jpg');

console.log('Gata!');
