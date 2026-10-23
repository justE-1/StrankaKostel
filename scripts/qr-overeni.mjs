import sharp from 'sharp';
import jsQR from 'jsqr';
import { readFile } from 'node:fs/promises';

const svg = await readFile('public/assets/qr-platba.svg');
const { data, info } = await sharp(svg)
  .resize({ width: 600, kernel: 'nearest' })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const vysledek = jsQR(new Uint8ClampedArray(data), info.width, info.height);
if (!vysledek) {
  console.error('QR se nepodarilo precist');
  process.exit(1);
}

console.log('precteno:', vysledek.data);

const ocekavano =
  'SPD*1.0*ACC:CZ3908000000006755789369*CC:CZK*RN:RIMSKOKATOLICKA FARNOST LICIBORICE*MSG:DAR NA OBNOVU KOSTELA SV. JAKUBA PRACOV';

console.log(vysledek.data === ocekavano ? 'SHODA znak po znaku: OK' : 'NESHODA!');
process.exit(vysledek.data === ocekavano ? 0 : 1);
