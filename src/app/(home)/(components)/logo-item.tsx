'use client';
import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DownloadIcon, LinkIcon } from 'lucide-react';
import { Logotype } from './logotype';
import { ILogo } from '@/app/(home)/(types)/logo';

const LogoItem: React.FC<{
  logo: ILogo;
}> = React.memo(({ logo }) => {
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
      <Logotype {...logo} />
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
          <Link href={`/logo-${logo.text}`}>View examples</Link>
        </Button>
      </div>
    </div>
  );
});

LogoItem.displayName = 'LogoItem';

export { LogoItem };
