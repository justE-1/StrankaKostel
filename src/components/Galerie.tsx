import { useState } from 'react';
import { useOdkryti } from '../hooks/useOdkryti';
import { DVOJICE, MRIZKA } from '../data/obsah';
import type { Snimek } from '../data/obsah';
import Lightbox from './Lightbox';
import './galerie.css';

const VSECHNY: Snimek[] = [DVOJICE.archiv, DVOJICE.dnes, ...MRIZKA];

export default function Galerie() {
  const [otevreny, setOtevreny] = useState<number | null>(null);
  const { ref, videt } = useOdkryti<HTMLUListElement>(0.05);

  return (
    <section className="galerie plocha-tmava rez-nahoru obal" aria-labelledby="galerie-nadpis">
      <div className="galerie-uvod">
        <div className="galerie-text">
          <h2 id="galerie-nadpis">Tehdy a dnes</h2>
          <p className="galerie-podtitulek">
            Sto dvacet let mezi dvěma snímky.
          </p>
        </div>

        <div className="dvojice">
          <figure className="dvojice-archiv">
            <button className="snimek-spoust" onClick={() => setOtevreny(0)}>
              <img
                src={DVOJICE.archiv.soubor}
                alt={DVOJICE.archiv.alt}
                width={DVOJICE.archiv.sirka}
                height={DVOJICE.archiv.vyska}
                loading="lazy"
                decoding="async"
              />
            </button>
            <figcaption className="mono">{DVOJICE.archiv.popisek}</figcaption>
          </figure>

          <figure className="dvojice-dnes">
            <button className="snimek-spoust" onClick={() => setOtevreny(1)}>
              <img
                src={DVOJICE.dnes.soubor}
                alt={DVOJICE.dnes.alt}
                width={DVOJICE.dnes.sirka}
                height={DVOJICE.dnes.vyska}
                loading="lazy"
                decoding="async"
              />
            </button>
            <figcaption className="mono">{DVOJICE.dnes.popisek}</figcaption>
          </figure>
        </div>
      </div>

      <ul className={videt ? 'mrizka je-videt' : 'mrizka'} ref={ref}>
        {MRIZKA.map((snimek, index) => (
          <li
            key={snimek.soubor}
            className={snimek.oblouk ? 'mrizka-pole je-oblouk' : 'mrizka-pole'}
            style={{ ['--poradi' as string]: index }}
          >
            <button className="snimek-spoust" onClick={() => setOtevreny(index + 2)}>
              <img
                src={snimek.soubor}
                alt={snimek.alt}
                width={snimek.sirka}
                height={snimek.vyska}
                loading="lazy"
                decoding="async"
                className={snimek.oblouk ? 'oblouk' : undefined}
              />
            </button>
          </li>
        ))}
      </ul>

      {otevreny !== null && (
        <Lightbox
          snimky={VSECHNY}
          index={otevreny}
          onZavri={() => setOtevreny(null)}
          onZmen={setOtevreny}
        />
      )}
    </section>
  );
}
