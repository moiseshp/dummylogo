'use client';
import { memo } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useLogoStore } from '../(hooks)/use-logo-store';

const layoutOptions = {
  left: 'flex-row',
  right: 'flex-row-reverse',
  top: 'flex-col',
  bottom: 'flex-col-reverse',
};

const LogoItem = memo(({ text }: any) => {
  const layout = useLogoStore((state) => state.layout);
  return (
    <div className="h-96 flex flex-col relative hover:bg-white dark:hover:bg-white/10 transition-all border -mr-[1px] -mb-[1px]">
      <div className="h-10 flex items-center px-5 text-xs">
        <button onClick={() => alert('header')}>header</button>
      </div>
      <section className="flex-grow flex items-center justify-center">
        <div className={cn('flex items-center gap-4', layoutOptions[layout])}>
          <span>¿i?</span>
          <p className="text-xl">Logo - {text}</p>
        </div>
      </section>
      <div className="h-10 flex items-center px-5 text-xs justify-between">
        <span>Category: Tech, Mode</span>
        <Link href={`/logo-${text}`}>Go &rarr;</Link>
      </div>
    </div>
  );
});

LogoItem.displayName = 'LogoItem';

export { LogoItem };
