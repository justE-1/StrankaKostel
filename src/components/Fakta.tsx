import { FAKTA } from '../data/obsah';
import { useOdkryti } from '../hooks/useOdkryti';
import './fakta.css';

export default function Fakta() {
  const { ref, videt } = useOdkryti<HTMLElement>();

  return (
    <section
      className="fakta plocha-papir rez-dolu obal"
      aria-labelledby="fakta-nadpis"
      ref={ref}
    >
      <h2 id="fakta-nadpis" className="jen-pro-odecitac">
        Kostel v číslech
      </h2>
      <dl className={videt ? 'fakta-rada odkryt je-videt' : 'fakta-rada odkryt'}>
        {FAKTA.map((fakt) => (
          <div className="fakta-polozka" key={fakt.cislo}>
            <dt className="fakta-cislo">{fakt.cislo}</dt>
            <dd className="fakta-popis mono">{fakt.popis}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
