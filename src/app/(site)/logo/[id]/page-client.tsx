'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr';
import { useCustomization } from '@/app/(site)/(hooks)/use-customization';
import { Logotype } from '@/app/(site)/(components)/logotype';
import * as icons from '@/app/(site)/(utils)/icons';
import { Spinner } from '@/components/ui/spinner';
import { useDynamicFonts } from '@/app/(site)/(hooks)/use-dynamic-fonts';

export default function PageClient() {
  const logo = {
    id: 'EcoSphere1',
    iconName: 'Leaf',
    styles: {
      fontFamily: 'Poppins',
      fontWeight: 400,
      fontSize: 26,
    },
    category: 'environment',
  };

  const { buildCustomization } = useCustomization();
  const customization = buildCustomization(logo);
  const isFontsLoaded = useDynamicFonts([logo]);

  if (!isFontsLoaded) {
    return (
      <div className="p-20 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  const Icon = icons[customization.iconName as keyof typeof icons];

  return (
    <div className="w-[70rem] flex mx-auto gap-x-6">
      <aside className="sticky top-20 h-full">
        <Button variant="ghost" asChild>
          <Link href="/">
            <ArrowLeft />
            Back
          </Link>
        </Button>
      </aside>
      <div className="flex-1">
        <div className="sticky top-20 border rounded-md bg-white px-10 py-2">
          Examples
        </div>
        <div className="border p-10 rounded-md mt-8">
          <Logotype customization={customization} icon={Icon} />
        </div>
        <div className="border p-10 rounded-md mt-8">Login</div>
        <div className="border p-10 rounded-md mt-8">Signature</div>
        <div className="border p-10 rounded-md mt-8">Product Card</div>
        {[...Array(130)].map((_, index) => (
          <p key={index}>Lorem Ipsum sit amet...</p>
        ))}
      </div>
      <div className="sticky top-20 h-full w-96">
        <div className="border p-10 rounded-md">
          <div>Logo Title</div>
          <div>Color select: #F00D00</div>
          <div>Google Font: Roboto &rarr;</div>
          <div>Phosphor Icon: Boat &rarr;</div>
          <div>Category: Space</div>
          <div className="flex gap-x-4">
            <Button>Download Logo</Button>
            <Button>Copy</Button>
            <Button>Share</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
