export type Fakt = { cislo: string; popis: string };

export type BodOsy = {
  /** jednotny zapis: rozsah 1560–1625, nebo jediny rok u jednorazove udalosti */
  rok: string;
  nadpis: string;
  text: string;
  zlom?: 'vypaleni' | 'dnes';
  /** o kolik px se osa v tomto bode odkloni doprava */
  odsazeni: number;
  mezera: 'tesna' | 'bezna' | 'siroka';
};

export type Etapa = {
  cislo: string;
  nadpis: string;
  text: string;
  komentar: string;
};

export type Snimek = {
  soubor: string;
  popisek: string;
  alt: string;
  sirka: number;
  vyska: number;
  span?: { sloupce: number; radky: number };
  oblouk?: boolean;
};

export const FAKTA: Fakt[] = [
  { cislo: '1360–1380', popis: 'stavba v době Karla IV., ve slohu lucemburské gotiky' },
  { cislo: '24', popis: 'mnichů zabitých při vypálení kláštera 9. února 1421' },
  { cislo: '3,3 ha', popis: 'pravěké hradiště, na jehož předpolí kostel stojí' },
  { cislo: '1', popis: 'pravidelná bohoslužba ročně — pouť kolem 25. července' },
];

export const OSA: BodOsy[] = [
  {
    rok: '1349–1350',
    nadpis: 'První zmínka',
    text: 'Svídnická farnost se poprvé připomíná roku 1349. Nejstarší zmínku o předchůdci kostela lze odvodit z postupních listin sepsaných při zřizování litomyšlského biskupství.',
    odsazeni: 0,
    mezera: 'bezna',
  },
  {
    rok: '1360–1374',
    nadpis: 'Klášter na skále',
    text: 'Jaroš Lacembok z Chlumu zakládá benediktinské proboštství svatého Jakuba. Žijí zde čtyři mniši. Jejich obydlí přiléhá k jižní zdi kostela — proto na té straně dodnes chybí opěrné pilíře.',
    odsazeni: 0,
    mezera: 'tesna',
  },
  {
    rok: '1360–1380',
    nadpis: 'Stavba',
    text: 'Kostel vzniká ve slohu vrcholné lucemburské gotiky. Tvarosloví jeho článků odpovídá stavbám let 1360–1390 — katedrále svatého Víta, Týnskému chrámu, kostelu Panny Marie v Chrudimi.',
    odsazeni: 26,
    mezera: 'tesna',
  },
  {
    rok: '1421',
    nadpis: 'Vypálení',
    text: 'Chrudimští husité klášter zbořili a vypálili. Zabito bylo 24 mnichů. Roku 1580 se klášter uvádí jako „zbořený a pustý“. Přetrvala pouze stavba kostela.',
    zlom: 'vypaleni',
    odsazeni: 0,
    mezera: 'bezna',
  },
  {
    rok: '1400–1500',
    nadpis: 'První obnova',
    text: 'Kostel obnovuje Jan Horyna z Honbic. Opravy pokračují po celé 15. století.',
    odsazeni: 40,
    mezera: 'siroka',
  },
  {
    rok: '1657–1675',
    nadpis: 'Baroko',
    text: 'Raně barokní oprava. Vzniká hlavní oltář s obrazem svatého Jakuba a vyřezávaná kazatelna. Loď dostává valenou klenbu. Z této opravy se dodnes dochoval krov.',
    odsazeni: 40,
    mezera: 'siroka',
  },
  {
    rok: '1773–1788',
    nadpis: 'Přestavby',
    text: 'Věž měla už od 16. století bedněnou nástavbu se třemi zvony — dvěma renesančními a jedním z 18. století. Dochoval se jediný.',
    odsazeni: 64,
    mezera: 'bezna',
  },
  {
    rok: '1815',
    nadpis: 'Varhany',
    text: 'Varhany jsou dílem králického varhanáře Josefa Ignáce Welzela. Naposledy opravovány roku 2015.',
    odsazeni: 64,
    mezera: 'bezna',
  },
  {
    rok: '1850–1865',
    nadpis: 'Regotizace',
    text: 'Novogotická restaurace pod vedením stavitele Františka Schmoranze staršího. Presbytář dostává bedněnou klenbu s vyznačenými žebry, okna novodobé kružby.',
    odsazeni: 40,
    mezera: 'tesna',
  },
  {
    rok: 'dnes',
    nadpis: 'Havarijní stav',
    text: 'Kostel spravuje farář ze Slatiňan. Jedinou pravidelnou bohoslužbou zůstala pouť kolem 25. července — kromě ní jen posvícení po 15. říjnu a příležitostné koncerty. Oprava si vyžádá miliony, které farnost ani obec nemají.',
    zlom: 'dnes',
    odsazeni: 0,
    mezera: 'siroka',
  },
];

export const POPIS_STAVBY =
  'Jednolodní stavba s hlubokým, pětiboce uzavřeným presbytářem, se sakristií po jižní straně, jižní předsíní a západní pětibokou věží s osmibokým vrchním dílem, zakončenou cibulovou bání. Opěrné pilíře jsou jen na severní straně — na té, která směřuje ke srázu. Portál do jižní předsíně je renesanční, půlkruhový, jemně profilovaný. V západním průčelí se zachoval zazděný hrotitý gotický portálek, v presbytáři jednoduchý sanktuář. Středověké jádro tvoří severní část lodi, spodních zhruba osm metrů věže a presbytář. V interiéru se částečně dochovaly středověké omítky.';

export const ETAPY: Etapa[] = [
  {
    cislo: '01',
    nadpis: 'Náletové dřeviny',
    text: 'Kořeny se zarývají do spár zdiva a do základů opěrných pilířů. Rozevírají je, drží vlhkost a nedovolí kameni vyschnout. Zeleň navíc brání přístupu techniky pro další dvě fáze.',
    komentar: 'Nejlevnější zásah — a jediný, který zvládnou dobrovolníci.',
  },
  {
    cislo: '02',
    nadpis: 'Nová střecha',
    text: 'Krov pochází z barokní opravy po roce 1657. Zatékající voda ničí středověké omítky, klenbu lodi i samotnou dřevěnou konstrukci, která tu stojí přes tři sta let.',
    komentar: 'Jediná věc, která odděluje šest set let staré zdivo od počasí.',
  },
  {
    cislo: '03',
    nadpis: 'Zajištění statiky',
    text: 'Kostel stojí na hraně skalního ostrohu. Opěrné pilíře nese jen severní strana; na jižní nikdy nebyly, protože k ní přiléhal klášter vypálený roku 1421. Koruna zdiva je nepravidelně ubouraná.',
    komentar: 'Nejdražší a nejméně vidět. Stojí na tom všechno ostatní.',
  },
];

export const DVOJICE: { archiv: Snimek; dnes: Snimek } = {
  archiv: {
    soubor: '/assets/foto/pohlednice-1900.jpg',
    popisek:
      'Pohlednice „Pod Práčovem“, nakladatel J. Schütz, před rokem 1900. Věž ještě s cibulovou bání.',
    alt: 'Historická pohlednice: kostel na zalesněném skalním ostrohu nad kamenitým korytem Chrudimky',
    sirka: 1600,
    vyska: 1049,
  },
  dnes: {
    soubor: '/assets/foto/dron-2017-01.jpg',
    popisek: 'Letecký pohled, 2017.',
    alt: 'Letecký snímek kostela na ostrožně nad údolím Chrudimky',
    sirka: 1600,
    vyska: 1200,
  },
};

export const MRIZKA: Snimek[] = [
  {
    soubor: '/assets/foto/dron-2017-02.jpg',
    popisek: 'Kostel nad údolím Chrudimky, 2017.',
    alt: 'Letecký snímek kostela nad údolím Chrudimky',
    sirka: 1600,
    vyska: 1200,
    span: { sloupce: 2, radky: 2 },
    oblouk: true,
  },
  {
    soubor: '/assets/foto/interier-lod-2026.jpg',
    popisek: 'Pohled od kruchty k presbytáři, srpen 2026.',
    alt: 'Interiér kostela: dřevěné lavice, křížová klenba a v pozadí hlavní oltář',
    sirka: 1600,
    vyska: 1200,
  },
  {
    soubor: '/assets/foto/sindelova-strecha.jpg',
    popisek: 'Kostel s původní šindelovou střechou, první polovina 20. století.',
    alt: 'Černobílá fotografie kostela se šindelovou střechou',
    sirka: 1200,
    vyska: 2006,
    span: { sloupce: 1, radky: 3 },
  },
  {
    soubor: '/assets/foto/interier-oltar-2026.jpg',
    popisek: 'Hlavní oltář s obrazem svatého Jakuba, srpen 2026.',
    alt: 'Raně barokní hlavní oltář se sloupy a obrazem svatého Jakuba s poutnickou holí',
    sirka: 1200,
    vyska: 1600,
  },
  {
    soubor: '/assets/foto/dron-2017-03.jpg',
    popisek: 'Práčov z ptačí perspektivy, 2017.',
    alt: 'Letecký snímek vsi Práčov s kostelem',
    sirka: 1600,
    vyska: 1200,
    span: { sloupce: 1, radky: 1 },
  },
  {
    soubor: '/assets/foto/krov-2026.jpg',
    popisek: 'Barokní krov z opravy po roce 1657, srpen 2026.',
    alt: 'Pohled vzhůru do dřevěného krovu s tesanými trámy; místy prosvítá denní světlo',
    sirka: 1600,
    vyska: 1200,
  },
  {
    soubor: '/assets/foto/interier-kruchta-2026.jpg',
    popisek: 'Kruchta s varhanami a malovaným parapetem, srpen 2026.',
    alt: 'Dřevěná kruchta s varhanami pod klenbou lodi, pod ní křížová cesta a lavice',
    sirka: 1200,
    vyska: 1600,
  },
  {
    soubor: '/assets/foto/dron-2017-04.jpg',
    popisek: 'Kostel a svídnická vyrovnávací věž, 2017.',
    alt: 'Letecký snímek kostela se svídnickou vyrovnávací věží',
    sirka: 1600,
    vyska: 1200,
    span: { sloupce: 1, radky: 1 },
  },
  {
    soubor: '/assets/foto/varhany-2026.jpg',
    popisek: 'Varhany Josefa Ignáce Welzela z roku 1815, detail skříně.',
    alt: 'Detail varhanní skříně se zlacenou řezbou a cínovými píšťalami',
    sirka: 1200,
    vyska: 1600,
  },
  {
    soubor: '/assets/foto/zvon-2026.jpg',
    popisek: 'Jediný dochovaný zvon ve zvonovém patře věže, srpen 2026.',
    alt: 'Bronzový zvon zavěšený v dřevěné zvonové stolici v patře věže',
    sirka: 1600,
    vyska: 1200,
  },
  {
    soubor: '/assets/foto/koncert-anto-2025.jpg',
    popisek: 'Večer v kostele, 19. června 2025.',
    alt: 'Vystoupení v interiéru kostela s lustrem a bočním oltářem',
    sirka: 1600,
    vyska: 2133,
    span: { sloupce: 2, radky: 1 },
  },
  {
    soubor: '/assets/foto/interier-madona-2026.jpg',
    popisek: 'Socha Panny Marie Lurdské, srpen 2026.',
    alt: 'Polychromovaná socha Panny Marie Lurdské se sepjatýma rukama a růžencem',
    sirka: 1200,
    vyska: 1600,
  },
  {
    soubor: '/assets/foto/dron-2017-05.jpg',
    popisek: 'Kostel na horizontu, 2017.',
    alt: 'Letecký snímek kostela na zalesněném horizontu',
    sirka: 1400,
    vyska: 1060,
    span: { sloupce: 1, radky: 2 },
  },
];

export const UCET = {
  cislo: '6755789369/0800',
  iban: 'CZ39 0800 0000 0067 5578 9369',
  swift: 'GIBACZPX',
  prijemce: 'Římskokatolická farnost Licibořice',
  sidlo: 'Licibořice 16, 538 23 Licibořice',
  ico: '43498469',
  banka: 'Česká spořitelna, a.s.',
};

export const FARNOST = {
  nazev: 'Římskokatolická farnost Licibořice',
  spravuje: 'Farní úřad Slatiňany',
  knez: 'ThLic. Boguslaw Partyka, děkan-farář',
  adresa: 'Farská 41, 538 21 Slatiňany',
  telefon: '603 861 275',
  telefonHref: '+420603861275',
  email: 'farnost-slatinany@seznam.cz',
};

export const ZDROJE = [
  'SOMMER, Jan. Kostel v Práčově — zapomenutý klenot lucemburské gotiky. Zprávy památkové péče, roč. 61, č. 7 (2001), s. 204–212.',
  'PAVLÍK, Jaroslav a KOBLÍŽEK, Robert. Práčovský kostel sv. Jakuba je od léta ve správě ze Slatiňan. Ozvěny Slatiňan, č. 12/2024.',
  'Národní památkový ústav — evidence kulturních památek, kostel sv. Jakuba, Práčov.',
  'CHYTIL, Karel. Soupis památek historických a uměleckých v království Českém. XI, Politický okres chrudimský. Praha, 1900.',
  'POCHE, Emanuel a kol. Umělecké památky Čech. Praha: Academia, 1977–1982.',
];
