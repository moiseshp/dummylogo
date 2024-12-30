import type { Metadata } from 'next';
import type { Logo } from '@/app/(logo)/(types)/logo';
import { LogoListGroup } from '@/app/(logo)/(components)/logo-list-group';
import { generateGoogleFont } from '@/app/(logo)/(utils)/generate-google-font';
import { BASE_URL } from '@/lib/config';
import allLogos from '@/app/(logo)/(data)/logos.json';

const title =
  '2024 © dummylogo by moiseshp | Create Dummy Logos for Development Projects | Dummy Logo Builder';
const description =
  'Dummy Logo Builder helps developers create placeholder logos for testing and design purposes in seconds';

export const metadata: Metadata = {
  title,
  description,
  applicationName: 'dummylogo',
  publisher: 'DummyLogo by moiseshp',
  openGraph: {
    title,
    description,
    url: BASE_URL,
    images: [
      {
        url: `${BASE_URL}/Screenshot-DummyLogo.png`,
        width: 1200,
        height: 900,
        alt: 'Screenshot-DummyLogo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@moiseseduardohp',
    title,
    description,
  },
};

export default function Page() {
  const data: Logo[] = allLogos;
  const googleFontUrl = generateGoogleFont(data);

  return (
    <>
      <link rel="stylesheet" href={googleFontUrl} />
      <LogoListGroup items={data} />
    </>
  );
}
