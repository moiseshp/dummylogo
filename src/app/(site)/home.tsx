'use client';
import * as React from 'react';
import { useLogoStore } from '@/app/(site)/(hooks)/use-logo-store';
import { Logotype } from './(components)/logotype';
import { LogoItem } from './(components)/logo-item';
import { useDynamicFonts } from '@/app/(site)/(hooks)/use-dynamic-fonts';
import type { Customization, Layout, Logo } from './(types)/logo';
import { Spinner } from '@/components/ui/spinner';
import { useTheme } from 'next-themes';
// import { FabricText, loadSVGFromString, StaticCanvas, util } from 'fabric';

// import { Boat } from '@phosphor-icons/react';
// import { renderToString } from 'react-dom/server';

const layoutItems = {
  left: 'flex-row',
  right: 'flex-row-reverse',
  top: 'flex-col',
  bottom: 'flex-col-reverse',
};

// const generateIconSVG = (IconComponent: any, props: any) => {
//   return renderToString(<IconComponent {...props} />);
// };

// const svgString = generateIconSVG(Boat, { weight: 'fill', size: 1 });

type HomeProps = {
  data: Logo[];
};

const Home = React.memo(({ data }: HomeProps) => {
  const name = useLogoStore((state) => state.name);
  const color = useLogoStore((state) => state.color);
  const layout = useLogoStore((state) => state.layout);
  const iconStyle = useLogoStore((state) => state.iconStyle);
  const iconName = useLogoStore((state) => state.iconName);
  const styles = useLogoStore((state) => state.styles);
  const setIconName = useLogoStore((state) => state.setIconName);
  const setStyles = useLogoStore((state) => state.setStyles);
  const isFontsLoaded = useDynamicFonts(data);

  const { resolvedTheme } = useTheme();
  const initialColor = () => (resolvedTheme === 'dark' ? 'white' : 'black');

  const customization: Customization = {
    name: name || 'dummylogo',
    color: color || initialColor(),
    layout: layoutItems[layout] as Layout,
    iconStyle,
  };

  if (!isFontsLoaded) return <Spinner />;

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

  // const download = (canvas: any) => {
  //   const imageSrc = canvas.toDataURL();
  //   // some download code down here
  //   const a = document.createElement('a');
  //   a.href = imageSrc;
  //   a.download = 'image.png';
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  // };

  // const handleLogoDownload = () => {
  //   const canvas = new StaticCanvas();
  //   const text = new FabricText('hello world', { fontFamily: 'Train One' });
  //   canvas.centerObject(text);

  //   loadSVGFromString(svgString).then(({ objects }: any) => {
  //     const icon = util.groupSVGElements(objects);
  //     icon.set({ left: 50, top: 50, scaleX: 1, scaleY: 1 });
  //     canvas.add(text, icon);
  //     canvas.add(icon);
  //     canvas.renderAll();
  //     download(canvas);
  //   });
  // };

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-5 -mt-[1px]">
      {data.map((item: Logo) => {
        const logo: Logo = {
          ...item,
          customization: {
            ...customization,
            iconName: iconName || item.iconName,
            styles: styles || item.styles,
          },
        };
        const isFontSelected = styles?.fontFamily === item.styles.fontFamily;
        const isIconSelected = iconName === item.iconName;

        return (
          <LogoItem
            key={item.id}
            isFontSelected={isFontSelected}
            isIconSelected={isIconSelected}
            onSetFont={() => handleSetFont(isFontSelected, item.styles)}
            onSetIcon={() => handleSetIcon(isIconSelected, item.iconName)}
            onLogoDownload={handleLogoDownload}
            {...logo}
          >
            <Logotype {...logo} />
          </LogoItem>
        );
      })}
    </div>
  );
});

Home.displayName = 'Home';

export { Home };
