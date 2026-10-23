import { useCallback, useRef, useState } from 'react';

/**
 * Zkopiruje text do schranky. Kdyz clipboard API selze nebo neexistuje,
 * vybere obsah zalozniho prvku do oznaceni, aby slo zkopirovat rucne.
 * Chybu nikdy nespolkne potichu.
 */
export function useKopirovani(zaloha?: React.RefObject<HTMLElement | null>) {
  const [stav, setStav] = useState<'klid' | 'hotovo' | 'rucne'>('klid');
  const casovac = useRef<number | null>(null);

  const oznacZalohu = useCallback(() => {
    const prvek = zaloha?.current;
    const vyber = window.getSelection();
    if (!prvek || !vyber) return;
    const rozsah = document.createRange();
    rozsah.selectNodeContents(prvek);
    vyber.removeAllRanges();
    vyber.addRange(rozsah);
  }, [zaloha]);

  const kopiruj = useCallback(
    async (text: string) => {
      if (casovac.current) window.clearTimeout(casovac.current);
      try {
        if (!navigator.clipboard) throw new Error('Schránka není k dispozici');
        await navigator.clipboard.writeText(text);
        setStav('hotovo');
      } catch (chyba) {
        console.warn('Kopírování do schránky selhalo:', chyba);
        oznacZalohu();
        setStav('rucne');
      }
      casovac.current = window.setTimeout(() => setStav('klid'), 2600);
    },
    [oznacZalohu],
  );

  return { stav, kopiruj } as const;
}
