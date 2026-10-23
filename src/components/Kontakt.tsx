import { FARNOST } from '../data/obsah';
import { useOdkryti } from '../hooks/useOdkryti';
import './kontakt.css';

export default function Kontakt() {
  const { ref, videt } = useOdkryti<HTMLDListElement>(0.2);

  return (
    <section className="kontakt plocha-papir rez-dolu obal" aria-labelledby="kontakt-nadpis">
      <h2 id="kontakt-nadpis">Kontakt</h2>

      <address className="kontakt-blok">
        <p className="kontakt-nazev">{FARNOST.nazev}</p>

        <dl className={videt ? 'kontakt-seznam je-videt' : 'kontakt-seznam'} ref={ref}>
          <div style={{ ['--poradi' as string]: 0 }}>
            <dt className="mono">Spravuje</dt>
            <dd>{FARNOST.knez}</dd>
          </div>
          <div style={{ ['--poradi' as string]: 1 }}>
            <dt className="mono">Farní úřad</dt>
            <dd>{FARNOST.adresa}</dd>
          </div>
          <div style={{ ['--poradi' as string]: 2 }}>
            <dt className="mono">E-mail</dt>
            <dd>
              <a href={'mailto:' + FARNOST.email}>{FARNOST.email}</a>
            </dd>
          </div>
          <div style={{ ['--poradi' as string]: 3 }}>
            <dt className="mono">Telefon</dt>
            <dd>
              <a href={'tel:' + FARNOST.telefonHref}>{FARNOST.telefon}</a>
            </dd>
          </div>
        </dl>
      </address>
    </section>
  );
}
