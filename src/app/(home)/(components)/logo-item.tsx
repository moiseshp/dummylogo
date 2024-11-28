'use client';
import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DownloadIcon, LinkIcon } from 'lucide-react';
import { Logo } from '@/app/(home)/(types)/logo';

type LogoItemProps = {
  children: React.ReactNode;
} & Logo;

const LogoItem: React.FC<LogoItemProps> = React.memo(
  ({ fontName, children }) => {
    return (
      <div className="h-96 flex flex-col relative transition-all border -mr-[1px] -mb-[1px] text-muted-foreground hover:text-primary hover:bg-white/90 dark:hover:bg-black/50">
        <div className="h-16 flex items-center justify-between px-4 text-xs">
          <Button variant="ghost" size="sm">
            Outfit
          </Button>
          <Button variant="ghost" size="sm">
            Label
          </Button>
        </div>
        {children}
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
            <Link href={`/logo-${fontName}`}>View examples</Link>
          </Button>
        </div>
      </div>
    );
  },
);

LogoItem.displayName = 'LogoItem';

export { LogoItem };
