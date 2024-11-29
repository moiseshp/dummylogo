import { Outfit as BaseFont } from 'next/font/google';

const baseFont = BaseFont({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export { baseFont };
