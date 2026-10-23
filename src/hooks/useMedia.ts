import { useEffect, useState } from 'react';

/** Sleduje media query. Vraci false pri SSR i kdyz matchMedia neexistuje. */
export function useMedia(dotaz: string): boolean {
  const [sedi, setSedi] = useState(() =>
    typeof window !== 'undefined' && typeof window.matchMedia === 'function'
      ? window.matchMedia(dotaz).matches
      : false,
  );

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const mq = window.matchMedia(dotaz);
    const zmena = (e: MediaQueryListEvent) => setSedi(e.matches);
    setSedi(mq.matches);
    mq.addEventListener('change', zmena);
    return () => mq.removeEventListener('change', zmena);
  }, [dotaz]);

  return sedi;
}
