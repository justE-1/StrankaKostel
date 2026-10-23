import { useEffect, useState } from 'react';
import './hlavicka.css';

const KOTVY = [
  { id: '#historie', popis: 'Historie' },
  { id: '#etapy', popis: 'Etapy' },
  { id: '#prispet', popis: 'Přispět' },
];

export default function Hlavicka() {
  const [odscrollovano, setOdscrollovano] = useState(false);

  useEffect(() => {
    const hlidac = () => setOdscrollovano(window.scrollY > 80);
    hlidac();
    window.addEventListener('scroll', hlidac, { passive: true });
    return () => window.removeEventListener('scroll', hlidac);
  }, []);

  return (
    <header className={odscrollovano ? 'hlavicka je-plna' : 'hlavicka'}>
      <a className="hlavicka-znacka mono" href="#hero">
        sv. Jakub <span aria-hidden="true">≈</span> Práčov
      </a>
      <nav aria-label="Hlavní navigace">
        <ul className="hlavicka-kotvy">
          {KOTVY.map((kotva) => (
            <li key={kotva.id}>
              <a
                className={kotva.id === '#prispet' ? 'mono je-mosaz' : 'mono'}
                href={kotva.id}
              >
                {kotva.popis}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
