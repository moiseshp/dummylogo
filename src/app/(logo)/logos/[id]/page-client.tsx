'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  ArrowLeft,
  Copy,
  DownloadSimple,
  PhosphorLogo,
  ShootingStar,
  Square,
} from '@phosphor-icons/react';
import { Logotype, LogotypeBox } from '@/app/(logo)/(components)/logotype';
import * as icons from '@/app/(logo)/(utils)/icons';
import { renderToString } from 'react-dom/server';
import { useLogoUtilities } from '@/app/(logo)/(hooks)/use-logo-utilities';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { BASE_URL } from '@/lib/config';
import type { Logo } from '@/app/(logo)/(types)/logo';
import { toast } from 'sonner';

export default function PageClient({ data: logo }: { data: Logo }) {
  const { buildCustomization, downloadLogo } = useLogoUtilities();
  const customization = buildCustomization(logo);
  const { copyToClipboard } = useCopyToClipboard();

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
      <div className="border-b flex flex-col md:flex-row justify-between h-full md:h-16">
        <div className="flex items-center gap-x-6 border-b h-14 md:h-auto md:border-none">
          <Button variant="item" className="border-l border-r px-6" asChild>
            <Link href="/">
              <ArrowLeft />
              <span className="hidden md:block">Go Back</span>
            </Link>
          </Button>
          <div className="flex gap-x-3 items-center">
            <ShootingStar size={20} />
            <h2 className="text-xs tracking-wider">
              {logo.id
                .replaceAll('_', ' ')
                .replaceAll('-', ' - ')
                .toUpperCase()}
            </h2>
          </div>
        </div>
        <div className="flex items-center h-14 md:h-auto">
          <Button
            variant="item"
            className="border-l border-r md:px-10 flex-1"
            asChild
          >
            <a
              href={`https://fonts.google.com/specimen/${customization.styles?.fontFamily}?preview.text=${customization.name}`}
              target="_blank"
              title="Go to Google Font page"
            >
              <img
                src="/google-fonts-logo.png"
                alt="Google Fonts - Logo"
                width={16}
              />
              {customization.styles?.fontFamily}
            </a>
          </Button>
          <Button variant="item" className="border-r md:px-10 flex-1" asChild>
            <a
              href={`https://phosphoricons.com/?q="${customization.iconName}"`}
              target="_blank"
              title="Go to Phosphor Icons page"
            >
              <PhosphorLogo weight="fill" /> {customization.iconName}
            </a>
          </Button>
        </div>
      </div>
      <div className="w-full md:w-[45rem] mx-auto flex flex-col">
        <div className="w-full border-b md:border-r md:border-l p-6">
          <LogotypeBox
            bgColor={customization.bgColor}
            className="h-96 md:h-[30rem]"
          >
            <Logotype
              customization={customization}
              icon={Icon}
              className="scale-[1.3] md:scale-[2]"
            />
          </LogotypeBox>
        </div>
        <div className="flex justify-around border border-t-0 h-16">
          <Button
            variant="item"
            className="flex-1 border-r"
            onClick={handleDownloadLogo}
            title={`Download dummylogo: ${logo.id}`}
          >
            <DownloadSimple />
            Download Logo
          </Button>
          <Button
            variant="item"
            className="px-6 border-r"
            onClick={() => {
              copyToClipboard(`${BASE_URL}/logos/${logo.id}`);
              toast.success('Link copied!');
            }}
            title={`Clipboard dummylogo: ${logo.id}`}
          >
            <Copy />
          </Button>
          <Button
            variant="item"
            className="px-6"
            onClick={() => {
              copyToClipboard(customization.color);
              toast.success('Color copied!');
            }}
            title={`Clipboard dummylogo color`}
          >
            <Square
              color={customization.color}
              weight="fill"
              className="border"
            />
            {customization.color}
          </Button>
        </div>
      </div>
    </>
  );
}
