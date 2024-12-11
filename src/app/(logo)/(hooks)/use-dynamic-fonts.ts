import * as React from 'react';
import type { Logo } from '@/app/(logo)/(types)/logo';

export function useDynamicFonts(data: Logo[]) {
  const [isFontsLoaded, setIsFontsLoaded] = React.useState(false);

  React.useEffect(() => {
    const fontsQuery = data
      .map(
        ({ styles }) =>
          `family=${styles.fontFamily!.replaceAll(' ', '+')}:wght@${
            styles.fontWeight
          }`,
      )
      .join('&');

    const googleFontUrl = `https://fonts.googleapis.com/css2?${fontsQuery}&display=swap`;

    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = googleFontUrl;
    fontLink.dataset.dynamicFont = 'true';
    document.head.appendChild(fontLink);

    fontLink.onload = () => setIsFontsLoaded(true);

    return () => {
      document.head
        .querySelectorAll('link[data-dynamic-font]')
        .forEach((link) => {
          link.remove();
        });
    };
  }, [data]);

  return isFontsLoaded;
}
