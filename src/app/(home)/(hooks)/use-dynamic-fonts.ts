import * as React from 'react';

export function useDynamicFonts(fontNames: string[]) {
  React.useEffect(() => {
    const uniqueFontNames = Array.from(new Set(fontNames));
    const fontsQuery = uniqueFontNames
      .map((font) => `family=${encodeURIComponent(font)}:wght@400;700`)
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
  }, [fontNames]);

  return;
}
