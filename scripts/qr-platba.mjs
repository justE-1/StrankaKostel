import QRCode from 'qrcode';
import { writeFile } from 'node:fs/promises';

const IBAN = 'CZ3908000000006755789369';

// kontrola IBAN podle ISO 13616 (mod 97 musi dat 1)
function ibanSedi(iban) {
  const prehozeno = iban.slice(4) + iban.slice(0, 4);
  const cislice = prehozeno
    .split('')
    .map((z) => (/[A-Z]/.test(z) ? (z.charCodeAt(0) - 55).toString() : z))
    .join('');
  let zbytek = 0;
  for (const z of cislice) zbytek = (zbytek * 10 + Number(z)) % 97;
  return zbytek === 1;
}

if (!ibanSedi(IBAN)) {
  console.error('IBAN neprosel kontrolou mod 97 — QR se negeneruje.');
  process.exit(1);
}

// SPAYD 1.0 podle standardu CBA — jen ASCII, MSG max 60 znaku, RN max 35
const SPAYD = [
  'SPD*1.0',
  'ACC:' + IBAN,
  'CC:CZK',
  'RN:RIMSKOKATOLICKA FARNOST LICIBORICE',
  'MSG:DAR NA OBNOVU KOSTELA SV. JAKUBA PRACOV',
].join('*');

if (/[^\x20-\x7E]/.test(SPAYD)) {
  console.error('SPAYD obsahuje ne-ASCII znaky.');
  process.exit(1);
}

const svg = await QRCode.toString(SPAYD, {
  type: 'svg',
  errorCorrectionLevel: 'M',
  margin: 0,
  color: { dark: '#0E0D0B', light: '#FFFFFF' },
});

await writeFile('public/assets/qr-platba.svg', svg, 'utf8');

console.log('SPAYD:', SPAYD);
console.log('delka:', SPAYD.length, 'znaku');
console.log('IBAN mod97: OK');
