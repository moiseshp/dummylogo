import * as React from 'react';
import type { Logo } from '@/app/(home)/(types)/logo';

export function useDynamicFonts(data: Logo[]) {
  React.useEffect(() => {
    const fontsQuery = data
      .map(
        ({ fontFamily, fontWeight }) =>
          `family=${encodeURIComponent(fontFamily)}:wght@${fontWeight}`,
      )
      .join('&');
    const googleFontUrl = `https://fonts.googleapis.com/css2?${fontsQuery}&display=swap`;

    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = googleFontUrl;
    fontLink.dataset.dynamicFont = 'true';
    document.head.appendChild(fontLink);

    return () => {
      document.head
        .querySelectorAll('link[data-dynamic-font]')
        .forEach((link) => {
          link.remove();
        });
    };
  }, [data]);

  return;
}
