import { notFound } from 'next/navigation';
import type { Logo } from '@/app/(logo)/(types)/logo';
import { generateGoogleFont } from '@/app/(logo)/(utils)/generate-google-font';
import PageClient from './page-client';
import { Metadata } from 'next';
import allLogos from '@/app/(logo)/(data)/logos.json';
import { BASE_URL } from '@/lib/config';

type PageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const data: Logo[] = allLogos;
  const logo = data.find((item) => item.id == params.id);
  const title = `Create you custom logo with Dummy Logo Maker - ${logo?.iconName} - font family: ${logo?.styles?.fontFamily}`;
  const description = `Discover the beauty of ${logo?.iconName}, a font designed for the devs. This font uses ${logo?.styles?.fontFamily} with a weight of ${logo?.styles?.fontWeight} and a size of ${logo?.styles?.fontSize}px. Perfect for your next project!`;

  return {
    title,
    applicationName: 'dummylogo',
    publisher: 'DummyLogo by moiseshp',
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${logo?.id}`,
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
}

export default function Page({ params }: PageProps) {
  const data: Logo[] = allLogos;
  const logo = data.find((item) => item.id == params.id);

  if (!logo) {
    notFound();
  }

  const googleFontUrl = generateGoogleFont(data);

  return (
    <>
      <link rel="stylesheet" href={googleFontUrl} />
      <PageClient data={logo} />
    </>
  );
}
