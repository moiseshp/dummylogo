import { Logo } from '@/app/(logo)/(types)/logo';

export function generateGoogleFont(data: Logo[]): string {
  const fontsQuery = data
    .map(
      ({ styles }) =>
        `family=${styles.fontFamily!.replaceAll(' ', '+')}:wght@${
          styles.fontWeight
        }`,
    )
    .join('&');

  return `https://fonts.googleapis.com/css2?${fontsQuery}&display=swap`;
}
