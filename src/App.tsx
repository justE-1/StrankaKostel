import Zrno from './components/Zrno';
import Tvary from './components/Tvary';
import Hlavicka from './components/Hlavicka';
import Hero from './components/Hero';
import Fakta from './components/Fakta';
import Historie from './components/Historie';
import Galerie from './components/Galerie';
import Etapy from './components/Etapy';
import Vyzva from './components/Vyzva';
import Kontakt from './components/Kontakt';
import Paticka from './components/Paticka';

export default function App() {
  return (
    <>
      <a className="preskocit" href="#obsah">
        Přeskočit na obsah
      </a>
      <Tvary />
      <Zrno />
      <Hlavicka />
      <main id="obsah">
        <Hero />
        <Fakta />
        <Historie />
        <Galerie />
        <Etapy />
        <Vyzva />
        <Kontakt />
      </main>
      <Paticka />
    </>
  );
}
