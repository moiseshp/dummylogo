import { notFound } from 'next/navigation';
import type { Logo } from '@/app/(logo)/(types)/logo';
import { generateGoogleFont } from '@/app/(logo)/(utils)/generate-google-font';
import logosJSON from '@/server/data/logos.json';
import PageClient from './page-client';
import { Metadata } from 'next';

type PageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const data: Logo[] = logosJSON;
  const logo = data.find((item) => item.id == params.id);

  return {
    title: `${logo?.iconName} - ${logo?.category} font family: ${logo?.styles?.fontFamily}`,
    applicationName: 'dummylogo',
    publisher: 'DummyLogo by moiseshp',
    description: `Discover the beauty of ${logo?.iconName}, a font designed for the ${logo?.category} category. This font uses ${logo?.styles?.fontFamily} with a weight of ${logo?.styles?.fontWeight} and a size of ${logo?.styles?.fontSize}px. Perfect for your next project!`,
  };
}

export default function Page({ params }: PageProps) {
  const data: Logo[] = logosJSON;
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
