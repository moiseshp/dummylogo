'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
// import { DownloadIcon, EyeIcon, LinkIcon, SparklesIcon } from 'lucide-react';
import { Logo } from '@/app/(site)/(types)/logo';
import Link from 'next/link';
import {
  DownloadSimple,
  Eye,
  GoogleLogo,
  LinkSimple,
  PhosphorLogo,
  TextT,
} from '@phosphor-icons/react';

type LogoItemProps = {
  children: React.ReactNode;
} & Logo;

const LogoItem: React.FC<LogoItemProps> = React.memo(
  ({ id, styles, iconName, color, category, children }) => {
    return (
      <div className="h-96 flex flex-col relative transition-all border -mr-[1px] -mb-[1px] text-muted-foreground hover:bg-white dark:hover:bg-black">
        <div className="h-16 flex items-center justify-between px-4 gap-x-1">
          <div className="flex items-center">
            <Button variant="ghost" size="sm">
              <img
                src="/google-fonts-logo.png"
                alt="Google Fonts - Logo"
                width={16}
              />
            </Button>
            <Button variant="ghost" size="sm">
              <PhosphorLogo weight="fill" />
            </Button>
          </div>
          <Button variant="ghost" size="sm">
            {/* <SparklesIcon /> */}
            {category}
          </Button>
        </div>
        <div className="flex-grow flex items-center justify-center">
          {children}
        </div>
        <div className="h-16 flex items-center px-4 text-xs justify-between">
          <div>
            <Button size="sm" variant="ghost" className="!text-inherit">
              <DownloadSimple />
            </Button>
            <Button size="sm" variant="ghost" className="!text-inherit">
              <LinkSimple />
            </Button>
            <Button size="sm" variant="ghost" className="!text-inherit" asChild>
              <Link href={`/${id}`}>
                <Eye />
              </Link>
            </Button>
          </div>
          <Button variant="ghost" size="sm">
            {color}
            <span
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: color,
              }}
            />
          </Button>
        </div>
      </div>
    );
  },
);

LogoItem.displayName = 'LogoItem';

export { LogoItem };
