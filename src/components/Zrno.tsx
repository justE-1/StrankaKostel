import './zrno.css';

/** Filmove zrno pres celou stranku. Generovane SVG filtrem, ne obrazkem z CDN. */
export default function Zrno() {
  return (
    <div className="zrno" aria-hidden="true">
      <svg width="100%" height="100%">
        <filter id="zrno-filtr">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#zrno-filtr)" />
      </svg>
    </div>
  );
}
