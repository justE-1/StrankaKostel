import { useEffect, useRef } from 'react';
import type { Snimek } from '../data/obsah';
import './lightbox.css';

type Props = {
  snimky: Snimek[];
  index: number;
  onZavri: () => void;
  onZmen: (index: number) => void;
};

export default function Lightbox({ snimky, index, onZavri, onZmen }: Props) {
  const dialog = useRef<HTMLDivElement | null>(null);
  const zavritRef = useRef<HTMLButtonElement | null>(null);
  const snimek = snimky[index];

  useEffect(() => {
    zavritRef.current?.focus();
    const puvodniOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = puvodniOverflow;
    };
  }, []);

  useEffect(() => {
    const klavesa = (udalost: KeyboardEvent) => {
      if (udalost.key === 'Escape') {
        onZavri();
        return;
      }
      if (udalost.key === 'ArrowRight') {
        onZmen((index + 1) % snimky.length);
        return;
      }
      if (udalost.key === 'ArrowLeft') {
        onZmen((index - 1 + snimky.length) % snimky.length);
        return;
      }
      if (udalost.key !== 'Tab') return;

      // focus trap
      const zaostritelne = dialog.current?.querySelectorAll<HTMLElement>('button, [href]');
      if (!zaostritelne || zaostritelne.length === 0) return;
      const prvni = zaostritelne[0];
      const posledni = zaostritelne[zaostritelne.length - 1];
      if (udalost.shiftKey && document.activeElement === prvni) {
        udalost.preventDefault();
        posledni.focus();
      } else if (!udalost.shiftKey && document.activeElement === posledni) {
        udalost.preventDefault();
        prvni.focus();
      }
    };

    document.addEventListener('keydown', klavesa);
    return () => document.removeEventListener('keydown', klavesa);
  }, [index, snimky.length, onZavri, onZmen]);

  if (!snimek) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={snimek.popisek}
      ref={dialog}
      onClick={(udalost) => {
        if (udalost.target === udalost.currentTarget) onZavri();
      }}
    >
      <button className="lightbox-zavrit mono" onClick={onZavri} ref={zavritRef}>
        <span aria-hidden="true">×</span>
        <span className="jen-pro-odecitac">Zavřít</span>
      </button>

      <button
        className="lightbox-sipka je-vlevo mono"
        onClick={() => onZmen((index - 1 + snimky.length) % snimky.length)}
      >
        <span aria-hidden="true">←</span>
        <span className="jen-pro-odecitac">Předchozí snímek</span>
      </button>

      <img
        className="lightbox-snimek"
        src={snimek.soubor}
        alt={snimek.alt}
        width={snimek.sirka}
        height={snimek.vyska}
      />

      <button
        className="lightbox-sipka je-vpravo mono"
        onClick={() => onZmen((index + 1) % snimky.length)}
      >
        <span aria-hidden="true">→</span>
        <span className="jen-pro-odecitac">Další snímek</span>
      </button>

      <p className="lightbox-popisek mono">{snimek.popisek}</p>
    </div>
  );
}
