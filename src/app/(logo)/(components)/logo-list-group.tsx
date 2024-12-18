'use client';
import { LogoItem } from '@/app/(logo)/(components)/logo-item';
import { Logotype, LogotypeBox } from '@/app/(logo)/(components)/logotype';
import { useLogoUtilities } from '@/app/(logo)/(hooks)/use-logo-utilities';
import { useLogoStore } from '@/app/(logo)/(hooks)/use-logo-store';
import type { Customization, Logo } from '@/app/(logo)/(types)/logo';
import { renderToString } from 'react-dom/server';
import * as icons from '@/app/(logo)/(utils)/icons';

export const LogoListGroup = ({ items }: { items: Logo[] }) => {
  const { initCustomization, buildCustomization, downloadLogo } =
    useLogoUtilities();

  const setIconName = useLogoStore((state) => state.setIconName);
  const setStyles = useLogoStore((state) => state.setStyles);

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

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 -mt-[1px]">
      {items.map((item: Logo) => {
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
            <LogotypeBox bgColor={customization.bgColor}>
              <Logotype customization={customization!} icon={Icon} />
            </LogotypeBox>
          </LogoItem>
        );
      })}
    </div>
  );
};
