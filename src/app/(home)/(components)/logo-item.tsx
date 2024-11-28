'use client';
import { memo } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useLogoStore } from '../(hooks)/use-logo-store';
import { Button } from '@/components/ui/button';
import { DownloadIcon, LinkIcon } from 'lucide-react';

const layoutOptions = {
  left: 'flex-row',
  right: 'flex-row-reverse',
  top: 'flex-col',
  bottom: 'flex-col-reverse',
};

const LogoItem = memo(({ text }: any) => {
  const layout = useLogoStore((state) => state.layout);
  const color = useLogoStore((state) => state.color);

  return (
    <div className="h-96 flex flex-col relative transition-all border -mr-[1px] -mb-[1px] text-muted-foreground hover:text-primary">
      <div className="h-16 flex items-center justify-between px-4 text-xs">
        <Button variant="ghost" size="sm">
          Outfit
        </Button>
        <Button variant="ghost" size="sm">
          Label
        </Button>
      </div>
      <section className="flex-grow flex items-center justify-center">
        <div
          className={cn('flex items-center gap-4', layoutOptions[layout])}
          style={{ color }}
        >
          <span>¿i?</span>
          <p className="text-2xl font-bold">Logo - {text}</p>
        </div>
      </section>
      <div className="h-16 flex items-center px-4 text-xs justify-between">
        <div>
          <Button size="sm" variant="ghost" className="!text-inherit">
            <DownloadIcon />
          </Button>
          <Button size="sm" variant="ghost" className="!text-inherit">
            <LinkIcon />
          </Button>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="font-normal !text-inherit"
          asChild
        >
          <Link href={`/logo-${text}`}>View examples</Link>
        </Button>
      </div>
    </div>
  );
});

LogoItem.displayName = 'LogoItem';

export { LogoItem };
