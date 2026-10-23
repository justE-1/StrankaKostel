import { useState } from 'react';
import { ETAPY } from '../data/obsah';
import { useOdkryti } from '../hooks/useOdkryti';
import './etapy.css';

export default function Etapy() {
  const [vybrana, setVybrana] = useState(0);
  const { ref, videt } = useOdkryti<HTMLDivElement>(0.25);
  const etapa = ETAPY[vybrana];

  return (
    <section className="etapy plocha-tmava obal" id="etapy" aria-labelledby="etapy-nadpis">
      <h2 id="etapy-nadpis">Tři fáze záchrany</h2>
      <p className="etapy-podtitulek">
        V tomto pořadí. Každá další nedává smysl bez té předchozí.
      </p>

      <div className="pruh" ref={ref}>
        <div className={videt ? 'pruh-drah je-videt' : 'pruh-drah'} role="tablist" aria-label="Fáze záchrany">
          {ETAPY.map((polozka, index) => (
            <button
              key={polozka.cislo}
              role="tab"
              id={'faze-' + polozka.cislo}
              aria-selected={index === vybrana}
              aria-controls="faze-panel"
              tabIndex={index === vybrana ? 0 : -1}
              className={index === vybrana ? 'pruh-usek je-vybrany' : 'pruh-usek'}
              style={{ ['--zpozdeni' as string]: index * 180 + 'ms' }}
              onClick={() => setVybrana(index)}
              onKeyDown={(udalost) => {
                if (udalost.key === 'ArrowRight') setVybrana((v) => (v + 1) % ETAPY.length);
                if (udalost.key === 'ArrowLeft') setVybrana((v) => (v - 1 + ETAPY.length) % ETAPY.length);
              }}
            >
              <span className="pruh-cislo mono">{polozka.cislo}</span>
              <span className="pruh-nazev">{polozka.nadpis}</span>
              <span className="pruh-vypln" aria-hidden="true" />
            </button>
          ))}
        </div>

        <p className="pruh-poznamka mono">
          Náklady zatím nejsou vyčísleny — rozpočet vzniká.
        </p>
      </div>

      <div className="faze-panel" id="faze-panel" role="tabpanel" aria-labelledby={'faze-' + etapa.cislo}>
        <p className="faze-text" key={etapa.cislo}>
          {etapa.text}
        </p>
        <p className="faze-komentar">{etapa.komentar}</p>
      </div>
    </section>
  );
}
