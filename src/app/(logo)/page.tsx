import type { Logo } from '@/app/(logo)/(types)/logo';
import { LogoListGroup } from '@/app/(logo)/(components)/logo-list-group';
import { generateGoogleFont } from '@/app/(logo)/(utils)/generate-google-font';
import allLogos from '@/app/(logo)/(data)/logos.json';

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
