'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import type { Logo } from '@/app/(site)/(types)/logo';
// import Link from 'next/link';
import {
  CheckSquare,
  DownloadSimple,
  // Eye,
  // LinkSimple,
  PhosphorLogo,
  Square,
} from '@phosphor-icons/react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type LogoItemProps = {
  isFontSelected: boolean;
  isIconSelected: boolean;
  onSetFont: () => void;
  onSetIcon: () => void;
  onLogoDownload: () => void;
  children: React.ReactNode;
} & Logo;

const LogoItem: React.FC<LogoItemProps> = React.memo(
  ({
    // id,
    // color,
    iconName,
    styles,
    isFontSelected = false,
    isIconSelected = false,
    onSetFont,
    onSetIcon,
    onLogoDownload,
    children,
  }) => {
    return (
      <div className="h-96 flex flex-col relative transition-all border-b sm:border sm:-mr-[1px] sm:-mb-[1px] text-muted-foreground hover:bg-muted">
        <div className="h-16 flex items-center px-4 gap-x-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={isFontSelected ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={onSetFont}
                >
                  <img
                    src="/google-fonts-logo.png"
                    alt="Google Fonts - Logo"
                    width={16}
                  />
                  {styles.fontFamily}
                  {isFontSelected ? <CheckSquare weight="fill" /> : <Square />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Set font</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={isIconSelected ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={onSetIcon}
                >
                  <PhosphorLogo weight="fill" />
                  {iconName}
                  {isIconSelected ? <CheckSquare weight="fill" /> : <Square />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Set icon</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex-grow flex items-center justify-center">
          {children}
        </div>
        <div className="h-16 flex items-center px-4 text-xs justify-between">
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    className="!text-inherit"
                    onClick={onLogoDownload}
                  >
                    <DownloadSimple />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download Logo</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {/* <Button size="sm" variant="ghost" className="!text-inherit">
              <LinkSimple />
            </Button>
            <Button size="sm" variant="ghost" className="!text-inherit" asChild>
              <Link href={`/${id}`}>
                <Eye />
              </Link>
            </Button> */}
          </div>
          {/* <Button variant="ghost" size="sm">
            {color}
            <span
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: color,
              }}
            />
          </Button> */}
        </div>
      </div>
    );
  },
);

LogoItem.displayName = 'LogoItem';

export { LogoItem };
