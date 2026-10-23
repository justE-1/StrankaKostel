import { useEffect, useState } from 'react';
import { useMedia } from '../hooks/useMedia';
import './hero.css';

const YOUTUBE_ID = '[YOUTUBE_ID_HERO]';
const JE_PLACEHOLDER = YOUTUBE_ID.startsWith('[');

function adresaVidea(id: string) {
  const parametry = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    loop: '1',
    playlist: id,
    controls: '0',
    modestbranding: '1',
    rel: '0',
    playsinline: '1',
    iv_load_policy: '3',
    disablekb: '1',
    fs: '0',
  });
  return 'https://www.youtube-nocookie.com/embed/' + id + '?' + parametry.toString();
}

export default function Hero() {
  const tlumenyPohyb = useMedia('(prefers-reduced-motion: reduce)');
  const uzkeOkno = useMedia('(max-width: 767px)');
  const [nacteno, setNacteno] = useState(false);
  const [skryjIndikator, setSkryjIndikator] = useState(false);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setNacteno(true);
      return;
    }
    const hotovo = () => setNacteno(true);
    window.addEventListener('load', hotovo);
    return () => window.removeEventListener('load', hotovo);
  }, []);

  useEffect(() => {
    const hlidac = () => setSkryjIndikator(window.scrollY > 80);
    window.addEventListener('scroll', hlidac, { passive: true });
    return () => window.removeEventListener('scroll', hlidac);
  }, []);

  const setriData =
    typeof navigator !== 'undefined' &&
    (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;

  const pustitVideo = nacteno && !tlumenyPohyb && !uzkeOkno && !setriData && !JE_PLACEHOLDER;

  return (
    <section className="hero" id="hero" aria-labelledby="hero-nadpis">
      <div className="hero-plocha">
        <img
          className="hero-poster"
          src="/assets/foto/hero-poster.jpg"
          alt=""
          width={1920}
          height={1440}
          {...{ fetchpriority: "high" }}
          loading="eager"
          aria-hidden="true"
        />
        {pustitVideo && (
          <iframe
            className="hero-video"
            src={adresaVidea(YOUTUBE_ID)}
            title="Kostel sv. Jakuba v Práčově"
            aria-hidden="true"
            tabIndex={-1}
            allow="autoplay; encrypted-media; picture-in-picture"
          />
        )}
        <div className="hero-zavoj-shora" aria-hidden="true" />
        <div className="hero-zavoj-zdola" aria-hidden="true" />
      </div>

      <div className="hero-obsah obal">
        <p className="mono hero-nadradek">
          Práčov <span aria-hidden="true">≈</span> okres Chrudim
        </p>
        <h1 id="hero-nadpis">
          Zapomenutý klenot
          <br />
          lucemburské gotiky
        </h1>
        <p className="hero-podtitulek">Zachraň kostel</p>
        <div className="hero-tlacitka">
          <a className="tlacitko-hlavni mono" href="#prispet">
            Přispět
          </a>
          <a className="tlacitko-vedlejsi mono" href="#etapy">
            Co se bude opravovat
          </a>
        </div>
      </div>

      <div className="hero-osa obal" aria-hidden="true">
        <span className="hero-rok">1349</span>
        <span className="hero-linka" />
        <span className="hero-rok">2026</span>
        <span className="hero-bod" />
      </div>

      <div className={skryjIndikator ? 'hero-indikator je-pryc' : 'hero-indikator'} aria-hidden="true">
        <span className="mono">dolů</span>
        <span className="hero-indikator-linka" />
      </div>
    </section>
  );
}
