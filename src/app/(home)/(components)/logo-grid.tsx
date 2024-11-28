'use client';
import { memo } from 'react';
import { useLogoStore } from '@/app/(home)/(hooks)/use-logo-store';
import { LogoItem } from './logo-item';

const LogoGrid = memo(() => {
  const layout = useLogoStore((state) => state.layout);
  const color = useLogoStore((state) => state.color);
  const text = useLogoStore((state) => state.text);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 -mt-[1px]">
      {Array.from({ length: 40 }).map((_, i) => (
        <LogoItem
          key={i + 1}
          logo={{ layout, color, text: String(text || i + 1) }}
        />
      ))}
    </div>
  );
});

LogoGrid.displayName = 'LogoGrid';

export { LogoGrid };
