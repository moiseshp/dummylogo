'use client';
import * as React from 'react';
import { useLogoStore } from '@/app/(site)/(hooks)/use-logo-store';
import { Logotype } from './(components)/logotype';
import { LogoItem } from './(components)/logo-item';
import { useDynamicFonts } from '@/app/(site)/(hooks)/use-dynamic-fonts';
import { Layout, Logo } from './(types)/logo';

const layoutItems = {
  left: 'flex-row',
  right: 'flex-row-reverse',
  top: 'flex-col',
  bottom: 'flex-col-reverse',
};

type HomeProps = {
  data: Logo[];
};

const Home: React.FC<HomeProps> = React.memo(({ data }) => {
  const layout = useLogoStore((state) => state.layout);
  const color = useLogoStore((state) => state.color);
  const name = useLogoStore((state) => state.name);
  const iconWeight = useLogoStore((state) => state.iconWeight);
  useDynamicFonts(data);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-5 -mt-[1px]">
      {data.map((item: Logo) => {
        const logo = {
          ...item,
          customization: {
            layout: layoutItems[layout] as Layout,
            color: color || item.color,
            name: name || 'dummylogo',
            iconWeight,
          },
        };
        return (
          <div key={item.id}>
            <LogoItem {...logo}>
              <Logotype {...logo} />
            </LogoItem>
          </div>
        );
      })}
    </div>
  );
});

Home.displayName = 'Home';

export { Home };
