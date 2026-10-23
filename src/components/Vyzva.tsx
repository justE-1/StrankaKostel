import { useRef } from 'react';
import { UCET } from '../data/obsah';
import { useKopirovani } from '../hooks/useKopirovani';
import { useOdkryti } from '../hooks/useOdkryti';
import './vyzva.css';

const POPISKY = {
  klid: 'kopírovat',
  hotovo: 'zkopírováno',
  rucne: 'označeno — zkopírujte ručně',
} as const;

export default function Vyzva() {
  const cisloRef = useRef<HTMLSpanElement | null>(null);
  const { stav, kopiruj } = useKopirovani(cisloRef);
  const { ref, videt } = useOdkryti<HTMLDivElement>(0.25);

  return (
    <section className="vyzva plocha-tmava" id="prispet" aria-labelledby="vyzva-nadpis">
      <div className="vyzva-oblouk oblouk" aria-hidden="true" />

      <div className={videt ? 'vyzva-obsah obal je-videt' : 'vyzva-obsah obal'} ref={ref}>
        <div className="vyzva-udaje">
          <h2 id="vyzva-nadpis">Přispějte na záchranu</h2>
          <p className="vyzva-uvod">
            Účet zřízený 26.&nbsp;června 2025 výhradně pro obnovu práčovského kostela.
          </p>

          <p className="mono vyzva-stitek">Číslo účtu</p>
          <div className="vyzva-cislo-radek">
            <span className="vyzva-cislo" ref={cisloRef}>
              {UCET.cislo}
            </span>
            <button className="vyzva-kopirovat mono" onClick={() => kopiruj(UCET.cislo)}>
              {POPISKY[stav]}
            </button>
          </div>
          <span role="status" aria-live="polite" className="jen-pro-odecitac">
            {stav === 'hotovo' ? 'Číslo účtu zkopírováno do schránky.' : ''}
            {stav === 'rucne' ? 'Číslo účtu je označeno, zkopírujte je ručně.' : ''}
          </span>

          <dl className="vyzva-seznam">
            <div><dt className="mono">IBAN</dt><dd className="mono">{UCET.iban}</dd></div>
            <div><dt className="mono">SWIFT / BIC</dt><dd className="mono">{UCET.swift}</dd></div>
            <div><dt className="mono">Příjemce</dt><dd className="mono">{UCET.prijemce}</dd></div>
            <div><dt className="mono">Sídlo</dt><dd className="mono">{UCET.sidlo}</dd></div>
            <div><dt className="mono">IČO</dt><dd className="mono">{UCET.ico}</dd></div>
            <div><dt className="mono">Banka</dt><dd className="mono">{UCET.banka}</dd></div>
          </dl>
        </div>

        <div className="vyzva-qr">
          <div className="vyzva-qr-ram">
            <img
              src="/assets/qr-platba.svg"
              width={240}
              height={240}
              alt="QR kód pro platbu na účet 6755789369/0800"
            />
          </div>
          <p className="mono vyzva-qr-popis">Načtěte v mobilním bankovnictví</p>
        </div>
      </div>

      <p className="vyzva-potvrzeni obal mono">
        <a href="/dokumenty/potvrzeni-o-vedeni-uctu.pdf" target="_blank" rel="noopener">
          Potvrzení o vedení účtu (PDF)<span aria-hidden="true"> →</span>
        </a>
      </p>
    </section>
  );
}
