'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import type { Logo } from '@/app/(site)/(types)/logo';
import Link from 'next/link';
import {
  CheckSquare,
  DownloadSimple,
  Eye,
  LinkSimple,
  PhosphorLogo,
  Square,
} from '@phosphor-icons/react';

type LogoItemProps = {
  isFontSelected: boolean;
  isIconSelected: boolean;
  onFontSelected: () => void;
  onIconSelected: () => void;
  children: React.ReactNode;
} & Logo;

const LogoItem: React.FC<LogoItemProps> = React.memo(
  ({
    id,
    color,
    iconName,
    styles,
    isFontSelected = false,
    isIconSelected = false,
    onFontSelected,
    onIconSelected,
    children,
  }) => {
    return (
      <div className="h-96 flex flex-col relative transition-all border -mr-[1px] -mb-[1px] text-muted-foreground hover:bg-muted">
        <div className="h-16 flex items-center px-4 gap-x-1">
          <Button
            variant={isFontSelected ? 'secondary' : 'ghost'}
            size="sm"
            onClick={onFontSelected}
          >
            <img
              src="/google-fonts-logo.png"
              alt="Google Fonts - Logo"
              width={16}
            />
            {styles.fontFamily}
            {isFontSelected && <CheckSquare weight="fill" />}
          </Button>
          <Button
            variant={isIconSelected ? 'secondary' : 'ghost'}
            size="sm"
            onClick={onIconSelected}
          >
            <PhosphorLogo weight="fill" />
            {iconName}
            {isIconSelected && <CheckSquare weight="fill" />}
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
