import { ZDROJE } from '../data/obsah';
import './paticka.css';

export default function Paticka() {
  return (
    <footer className="paticka plocha-tmava obal">
      <p className="mono paticka-nadpis">Odkud čerpáme</p>
      <ul className="paticka-zdroje">
        {ZDROJE.map((zdroj) => (
          <li key={zdroj} className="mono">
            {zdroj}
          </li>
        ))}
      </ul>
      <div className="paticka-spodek">
        <p className="mono">
          © Římskokatolická farnost Licibořice <span aria-hidden="true">·</span> Historické snímky
          z&nbsp;archivu <span aria-hidden="true">·</span> Letecké snímky 2017
        </p>
        <a className="mono" href="#hero">
          Nahoru <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
