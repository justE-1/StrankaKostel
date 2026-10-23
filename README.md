# Zachraňme Práčov — kostel sv. Jakuba Většího

Jednostránkový charitativní web pro záchranu gotického kostela v Práčově.
React 18 + Vite + TypeScript, čisté CSS s designovými tokeny. Bez frameworku na UI.

## Spuštění

```
npm install
npm run dev       # vývojový server
npm run build     # produkční build do dist/
npm run preview   # náhled produkčního buildu
```

## Skripty

```
node scripts/prep-fotky.mjs   # zmenší zdrojové fotky z ../.. do public/assets/foto (jpg + webp)
node scripts/qr-platba.mjs    # vygeneruje QR platbu (SPAYD) do public/assets/qr-platba.svg
node scripts/qr-overeni.mjs   # dekóduje QR zpět a porovná znak po znaku
```

`qr-platba.mjs` nejdřív ověří IBAN kontrolou mod 97 a odmítne generovat, pokud neprojde.

## Struktura

```
src/
├── data/obsah.ts          # veškerý text a čísla na jednom místě
├── styles/tokens.css      # barvy, písma, rytmus
├── styles/global.css      # reset, plochy, řezy, oblouk, odkrývání
├── hooks/                 # useOdkryti, useMedia, useKopirovani
└── components/            # jedna komponenta + jedno CSS na sekci
```

## Designový systém

| Token | Hodnota | Použití |
|---|---|---|
| `--uhel` | `#0E0D0B` | hlavní tmavá plocha |
| `--kamen` | `#1F1C17` | první vrstva etap, sekce Výzva |
| `--papir` | `#E8E2D6` | světlá plocha, text na tmavém |
| `--papir-tlum` | `#B9AF9B` | sekundární text **na tmavém** |
| `--inkoust-tlum` | `#6B6152` | sekundární text **na papírovém** (kontrast) |
| `--mosaz` | `#B08D3F` | akcent — jen CTA, aktivní rok, focus |

Písmo: Cormorant Garamond (nadpisy) · Libre Franklin (text) · JetBrains Mono (čísla, štítky).
Všechna s podmnožinou `latin-ext` kvůli české diakritice.

Gotický oblouk je definován jednou v `components/Tvary.tsx` jako SVG `clipPath`
s `clipPathUnits="objectBoundingBox"` — proto se roztáhne na jakoukoli velikost prvku.
`clip-path: path()` by nefungoval, pracuje v absolutních pixelech.

## Co ještě není doplněné

| Placeholder | Kde | Čeká na |
|---|---|---|
| `[YOUTUBE_ID_HERO]` | `components/Hero.tsx` | nahrání videa na YouTube |
| `[ČÁSTKA]` | `data/obsah.ts` → `ETAPY` | rozpočet jednotlivých etap |
| `[EMAIL_FARNOST]`, `[TELEFON_FARNOST]` | `components/Kontakt.tsx` | kontakt na farnost |
| `[DOMENA]` | `index.html` | doména pro OG a canonical |

Dokud je v `Hero.tsx` placeholder, video se vůbec nevkládá a hero drží statický snímek.
Video se navíc nespouští při `prefers-reduced-motion`, pod 768 px a při zapnutém spoření dat.

## Platební údaje

Účet **6755789369/0800**, IBAN `CZ39 0800 0000 0067 5578 9369`,
Římskokatolická farnost Licibořice, IČO 43498469.
QR kód je vygenerovaný ze SPAYD řetězce a ověřený zpětným dekódováním.
Potvrzení o vedení účtu leží v `public/dokumenty/`.

## Zdroje obsahu

Texty vycházejí z článku Pavlíka a Koblížka (Ozvěny Slatiňan 12/2024), evidence NPÚ
a Sommerovy studie z roku 2001. Seznam je v patičce webu.
Prompty, ze kterých vznikl původní zadání, jsou v `../prompty/`.
