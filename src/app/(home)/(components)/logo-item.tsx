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
  return (
    <div className="h-96 flex flex-col relative hover:bg-white dark:hover:bg-white/10 transition-all border -mr-[1px] -mb-[1px]">
      <div className="h-16 flex items-center px-6 text-xs text-muted-foreground">
        {['Tech', 'Mode'].map((item) => (
          <Button
            key={item}
            variant="link"
            size="sm"
            className="mr-2 text-inherit"
          >
            {item}
          </Button>
        ))}
      </div>
      <section className="flex-grow flex items-start p-6">
        <div className={cn('flex items-center gap-4', layoutOptions[layout])}>
          <span>¿i?</span>
          <p className="text-2xl font-bold">Logo - {text}</p>
        </div>
      </section>
      <div className="h-16 flex items-center px-6 text-xs justify-between text-muted-foreground">
        <div>
          <Button size="sm" variant="ghost">
            <DownloadIcon />
          </Button>
          <Button size="sm" variant="ghost">
            <LinkIcon />
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="font-normal" asChild>
          <Link href={`/logo-${text}`}>View examples</Link>
        </Button>
      </div>
    </div>
  );
});

LogoItem.displayName = 'LogoItem';

export { LogoItem };
