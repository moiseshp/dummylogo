'use client';
import * as React from 'react';
import { useLogoStore } from '@/app/(site)/(hooks)/use-logo-store';
import { LogoItem } from './(components)/logo-item';
import { useDynamicFonts } from '@/app/(site)/(hooks)/use-dynamic-fonts';
import type { Customization, Logo } from './(types)/logo';
import { Spinner } from '@/components/ui/spinner';
import { createCanvasLogo } from './(utils)/create-canvas-logo';
import { renderToString } from 'react-dom/server';
import { downloadImage } from '@/lib/download-image';
import * as icons from './(utils)/icons';
import { Logotype } from './(components)/logotype';
import { useCustomization } from './(hooks)/use-customization';

type HomeProps = {
  data: Logo[];
};

export default function PageClient({ data }: HomeProps) {
  const { initCustomization, buildCustomization } = useCustomization();
  const setIconName = useLogoStore((state) => state.setIconName);
  const setStyles = useLogoStore((state) => state.setStyles);
  const isFontsLoaded = useDynamicFonts(data);

  const handleSetFont = (
    isFontSelected: boolean,
    styles: React.CSSProperties,
  ) => {
    if (isFontSelected) {
      setStyles();
      return;
    }
    setStyles(styles);
    setIconName();
  };

  const handleSetIcon = (isIconSelected: boolean, iconName: string) => {
    if (isIconSelected) {
      setIconName();
      return;
    }
    setIconName(iconName);
    setStyles();
  };

  const handleLogoDownload = async (
    customization: Customization,
    Icon: React.ComponentType<any>,
  ) => {
    const svgIcon = renderToString(
      <Icon
        weight={customization.iconStyle}
        color={customization.color}
        size={customization.iconSize}
      />,
    );

    const canvasUrl = await createCanvasLogo({ customization, svgIcon });
    downloadImage(canvasUrl);
  };

  if (!isFontsLoaded) {
    return (
      <div className="p-20 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 -mt-[1px]">
      {data.map((item: Logo) => {
        const customization = buildCustomization(item);
        const isFontSelected =
          initCustomization.styles?.fontFamily === item.styles.fontFamily;
        const isIconSelected = initCustomization.iconName === item.iconName;
        const Icon = icons[customization.iconName as keyof typeof icons];
        return (
          <LogoItem
            key={item.id}
            isFontSelected={isFontSelected}
            isIconSelected={isIconSelected}
            onSetFont={() => handleSetFont(isFontSelected, item.styles)}
            onSetIcon={() => handleSetIcon(isIconSelected, item.iconName)}
            onLogoDownload={() => handleLogoDownload(customization, Icon)}
            {...item}
          >
            <Logotype customization={customization} icon={Icon} />
          </LogoItem>
        );
      })}
    </div>
  );
}
