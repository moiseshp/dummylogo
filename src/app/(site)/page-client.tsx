'use client';
import * as React from 'react';
import { useLogoStore } from '@/app/(site)/(hooks)/use-logo-store';
import { LogoItem } from './(components)/logo-item';
import { useDynamicFonts } from '@/app/(site)/(hooks)/use-dynamic-fonts';
import type { Customization, Logo } from './(types)/logo';
import { Spinner } from '@/components/ui/spinner';
import { renderToString } from 'react-dom/server';
import * as icons from './(utils)/icons';
import { Logotype } from './(components)/logotype';
import { useLogoUtilities } from './(hooks)/use-logo-utilities';

type HomeProps = {
  data: Logo[];
};

export default function PageClient({ data }: HomeProps) {
  const { initCustomization, buildCustomization, downloadLogo } =
    useLogoUtilities();
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

  const handleDownloadLogo = async (
    customization: Customization,
    Icon: React.ComponentType<any>,
    filename: string,
  ) => {
    const svgIcon = renderToString(
      <Icon
        weight={customization.iconStyle}
        color={customization.color}
        size={customization.iconSize}
      />,
    );
    await downloadLogo(customization, svgIcon, filename);
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
            onLogoDownload={() =>
              handleDownloadLogo(customization, Icon, item.id)
            }
            {...item}
          >
            <div
              className="flex items-center justify-center w-full h-full rounded-md"
              style={{
                backgroundColor: customization.bgColor,
              }}
            >
              <Logotype customization={customization} icon={Icon} />
            </div>
          </LogoItem>
        );
      })}
    </div>
  );
}
