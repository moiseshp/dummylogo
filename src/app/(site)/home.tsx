'use client';
import * as React from 'react';
import { useLogoStore } from '@/app/(site)/(hooks)/use-logo-store';
import { LogoItem } from './(components)/logo-item';
import { useDynamicFonts } from '@/app/(site)/(hooks)/use-dynamic-fonts';
import type { Customization, Layout, Logo } from './(types)/logo';
import { Spinner } from '@/components/ui/spinner';
import { useTheme } from 'next-themes';
import { createCanvasLogo } from './(utils)/create-canvas-logo';
import { renderToString } from 'react-dom/server';
import { downloadImage } from '@/lib/download-image';
import * as icons from './(utils)/icons';
import { cn } from '@/lib/utils';
import { layoutItems } from './(utils)/layout-items';
import { getInitialColor } from './(utils)/get-initial-color';

type HomeProps = {
  data: Logo[];
};

const Home = React.memo(({ data }: HomeProps) => {
  const name = useLogoStore((state) => state.name);
  const color = useLogoStore((state) => state.color);
  const layout = useLogoStore((state) => state.layout);
  const iconStyle = useLogoStore((state) => state.iconStyle);
  const iconSize = useLogoStore((state) => state.iconSize);
  const iconName = useLogoStore((state) => state.iconName);
  const styles = useLogoStore((state) => state.styles);
  const setIconName = useLogoStore((state) => state.setIconName);
  const setStyles = useLogoStore((state) => state.setStyles);
  const isFontsLoaded = useDynamicFonts(data);
  const { resolvedTheme } = useTheme();

  const initCustomization: Customization = {
    name: name || 'dummylogo',
    color: color || getInitialColor(resolvedTheme),
    layout: layoutItems[layout] as Layout,
    iconStyle,
    iconSize,
  };

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

  if (!isFontsLoaded)
    return (
      <div className="p-20 flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 -mt-[1px]">
      {data.map((item: Logo) => {
        const customization = {
          ...initCustomization,
          iconName: iconName || item.iconName,
          styles: styles || item.styles,
        };

        const isFontSelected = styles?.fontFamily === item.styles.fontFamily;
        const isIconSelected = iconName === item.iconName;
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
            <div
              className={cn(
                'flex items-center gap-x-3 gap-y-1',
                customization.layout,
              )}
            >
              <Icon
                weight={customization.iconStyle}
                size={customization.iconSize}
                color={customization.color}
                className="leading-none"
              />
              <p
                className="-mt-1"
                style={{ ...customization.styles, color: customization.color }}
              >
                {customization.name}
              </p>
            </div>
          </LogoItem>
        );
      })}
    </div>
  );
});

Home.displayName = 'Home';

export { Home };
