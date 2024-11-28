'use client';
import { memo } from 'react';
import { useLogoStore } from '@/app/(home)/(hooks)/use-logo-store';
import { LogoItem } from './logo-item';
import { useDynamicFonts } from '../(hooks)/use-dynamic-fonts';

const LogoGrid = memo(({ data }: any) => {
  const layout = useLogoStore((state) => state.layout);
  const color = useLogoStore((state) => state.color);
  const text = useLogoStore((state) => state.text);

  useDynamicFonts(data.map(({ fontName }: any) => fontName));

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 -mt-[1px]">
      {data.map((item: any) => (
        <div key={item.id} style={{ fontFamily: item.fontName }}>
          <LogoItem
            logo={{ layout, color, text: String(text || item.fontName) }}
          />
        </div>
      ))}
    </div>
  );
});

LogoGrid.displayName = 'LogoGrid';

export { LogoGrid };
