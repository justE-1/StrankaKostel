import { useEffect, useRef, useState } from 'react';

/** Odkryje prvek pri prvnim vstupu do viewportu a pak prestane sledovat. */
export function useOdkryti<T extends HTMLElement>(prah = 0.2) {
  const ref = useRef<T | null>(null);
  const [videt, setVidet] = useState(false);

  useEffect(() => {
    const prvek = ref.current;
    if (!prvek) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVidet(true);
      return;
    }

    const pozorovatel = new IntersectionObserver(
      (zaznamy) => {
        for (const zaznam of zaznamy) {
          if (zaznam.isIntersecting) {
            setVidet(true);
            pozorovatel.unobserve(zaznam.target);
          }
        }
      },
      { threshold: prah },
    );

    pozorovatel.observe(prvek);
    return () => pozorovatel.disconnect();
  }, [prah]);

  return { ref, videt } as const;
}
