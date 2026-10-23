import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const ZDROJ = 'C:/Users/nitro1/Desktop/__KOSTEL';
const CIL = path.resolve('public/assets/foto');

// zdrojovy soubor -> cilovy nazev + sirka
const PLAN = [
  ['Dronem 2017/4.jpg', 'hero-poster', 1920],
  ['Dronem 2017/2.jpg', 'dron-2017-01', 1600],
  ['Dronem 2017/8.jpg', 'dron-2017-02', 1600],
  ['Dronem 2017/5.jpg', 'dron-2017-03', 1600],
  ['Dronem 2017/DJI_0017.jpg', 'dron-2017-04', 1600],
  ['Dronem 2017/6.jpg', 'dron-2017-05', 1400],
  ['Kostel se cibulovitou střechou věže před rokem 1900.jpg', 'pohlednice-1900', 1600],
  ['Kostel s původní šindelovou střechou v první polovině 20 století.jpg', 'sindelova-strecha', 1200],
  ['Koncert_ANTO_19_06_2025/20250619_191551.jpg', 'koncert-anto-2025', 1600],
  ['Interier 2026/20260802_150639.jpg', 'interier-oltar-2026', 1200],
  ['Interier 2026/20260802_150812.jpg', 'interier-kruchta-2026', 1200],
  ['Interier 2026/20260802_150901.jpg', 'interier-madona-2026', 1200],
  ['Interier 2026/20260802_151005.jpg', 'interier-lod-2026', 1600],
  ['Interier 2026/20260802_151449.jpg', 'varhany-2026', 1200],
  ['Interier 2026/20260802_152051.jpg', 'krov-2026', 1600],
  ['Interier 2026/20260802_152602.jpg', 'zvon-2026', 1600],
];

await mkdir(CIL, { recursive: true });

for (const [rel, nazev, sirka] of PLAN) {
  const vstup = path.join(ZDROJ, rel);
  let obraz = sharp(vstup).rotate().resize({ width: sirka, withoutEnlargement: true });

  // hero poster dostane vlastni gradaci — ztmaveni a odsyceni, aby na nem text cetl
  if (nazev === 'hero-poster') {
    obraz = obraz.modulate({ brightness: 0.6, saturation: 0.32 }).linear(1.1, -12);
  }

  const info = await obraz.clone().jpeg({ quality: 78, mozjpeg: true }).toFile(path.join(CIL, nazev + '.jpg'));
  await obraz.clone().webp({ quality: 74 }).toFile(path.join(CIL, nazev + '.webp'));

  console.log(nazev, info.width + 'x' + info.height, Math.round(info.size / 1024) + ' kB');
}

console.log('hotovo');
