'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, DownloadSimple, PhosphorLogo } from '@phosphor-icons/react';
import { Logotype } from '@/app/(site)/(components)/logotype';
import * as icons from '@/app/(site)/(utils)/icons';
import { Spinner } from '@/components/ui/spinner';
import { useDynamicFonts } from '@/app/(site)/(hooks)/use-dynamic-fonts';
import { renderToString } from 'react-dom/server';
import { useLogoUtilities } from '@/app/(site)/(hooks)/use-logo-utilities';

export default function PageClient() {
  const logo = {
    id: 'EcoSphere1',
    iconName: 'Leaf',
    styles: {
      fontFamily: 'Train One',
      fontWeight: 400,
      fontSize: 28,
    },
    category: 'environment',
  };

  const { buildCustomization, downloadLogo } = useLogoUtilities();
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

  const handleDownloadLogo = async () => {
    const svgIcon = renderToString(
      <Icon
        weight={customization.iconStyle}
        color={customization.color}
        size={customization.iconSize}
      />,
    );
    await downloadLogo(customization, svgIcon, logo.id);
  };

  return (
    <>
      <div className="border-b h-16">
        <div className="w-[45rem] mx-auto flex justify-between h-full">
          <div className="flex items-center gap-x-6">
            <Button variant="item" className="border-l border-r px-6" asChild>
              <Link href="/">
                <ArrowLeft />
              </Link>
            </Button>
            <h2>{logo.id}</h2>
          </div>
          <div className="flex items-center">
            <Button variant="item" className="border-l border-r px-6" asChild>
              <a
                href={`https://fonts.google.com/specimen/${customization.styles?.fontFamily}?preview.text=${customization.name}`}
                target="_blank"
              >
                <img
                  src="/google-fonts-logo.png"
                  alt="Google Fonts - Logo"
                  width={16}
                />
                {customization.styles?.fontFamily}
              </a>
            </Button>
            <Button variant="item" className="border-r px-6" asChild>
              <a
                href={`https://phosphoricons.com/?q="${customization.iconName}"`}
                target="_blank"
              >
                <PhosphorLogo weight="fill" /> {customization.iconName}{' '}
              </a>
            </Button>
          </div>
        </div>
        <div className="w-[45rem] mx-auto flex flex-col">
          <div className="w-full border border-t-0 p-6">
            <div
              className="h-[30rem] flex items-center justify-center w-full rounded-md"
              style={{
                backgroundColor: customization.bgColor,
              }}
            >
              <Logotype
                customization={customization}
                icon={Icon}
                className="scale-[2]"
              />
            </div>
          </div>
          <div className="flex justify-around border border-t-0 h-16">
            <Button
              variant="item"
              className="flex-1"
              onClick={handleDownloadLogo}
            >
              <DownloadSimple />
              Download Logo
            </Button>
            {/* <Button variant="item" className="flex-1">
              <Copy /> Copy Link
            </Button> */}
          </div>
        </div>
      </div>
    </>
  );
}
