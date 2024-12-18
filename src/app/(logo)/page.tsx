import type { Logo } from '@/app/(logo)/(types)/logo';
import logosJSON from '@/server/data/logos.json';
import { LogoListGroup } from '@/app/(logo)/(components)/logo-list-group';
import { generateGoogleFont } from '@/app/(logo)/(utils)/generate-google-font';

export default function Page() {
  const data: Logo[] = logosJSON;
  const googleFontUrl = generateGoogleFont(data);

  return (
    <>
      <link rel="stylesheet" href={googleFontUrl} />
      <LogoListGroup items={data} />
    </>
  );
}
