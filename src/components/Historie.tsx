import { useState } from 'react';
import { OSA, POPIS_STAVBY } from '../data/obsah';
import { useOdkryti } from '../hooks/useOdkryti';
import './historie.css';

export default function Historie() {
  const [otevrene, setOtevrene] = useState<ReadonlySet<string>>(() => new Set());
  const { ref, videt } = useOdkryti<HTMLOListElement>(0.05);

  const prepni = (rok: string) =>
    setOtevrene((stav) => {
      const dalsi = new Set(stav);
      if (dalsi.has(rok)) dalsi.delete(rok);
      else dalsi.add(rok);
      return dalsi;
    });

  return (
    <section className="historie plocha-papir obal" id="historie" aria-labelledby="historie-nadpis">
      <h2 id="historie-nadpis" className="historie-nadpis">
        Šest set let
        <br />
        na jedné skále
      </h2>

      <ol className={videt ? 'osa je-videt' : 'osa'} ref={ref}>
        {OSA.map((bod, index) => {
          const otevreno = otevrene.has(bod.rok);
          return (
            <li
              key={bod.rok}
              className={
                'osa-bod' +
                (bod.zlom ? ' je-zlom je-zlom-' + bod.zlom : '') +
                (otevreno ? ' je-otevreny' : '')
              }
              style={{
                ['--odklon' as string]: bod.odsazeni + 'px',
                ['--poradi' as string]: index,
              }}
            >
              <div className="osa-linka" aria-hidden="true" />

              <button
                className="osa-spoust"
                aria-expanded={otevreno}
                aria-controls={'bod-' + bod.rok}
                onClick={() => prepni(bod.rok)}
              >
                <span className="osa-rok mono">{bod.rok}</span>
                <span className="osa-uzel" aria-hidden="true" />
                <span className="osa-titulek">{bod.nadpis}</span>
                <span className="osa-sipka" aria-hidden="true" />
              </button>

              <div className="osa-obal" id={'bod-' + bod.rok} hidden={!otevreno}>
                <p className="osa-text">{bod.text}</p>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="popis-stavby">
        <p className="mono popis-stavby-stitek">Popis stavby</p>
        <p className="popis-stavby-text">{POPIS_STAVBY}</p>
      </div>
    </section>
  );
}
