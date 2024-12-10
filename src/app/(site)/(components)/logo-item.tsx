'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import type { Logo } from '@/app/(site)/(types)/logo';
import Link from 'next/link';
import {
  ArrowSquareIn,
  CheckSquare,
  DownloadSimple,
  // Eye,
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
    id,
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
      <div className="h-96 flex flex-col relative border-b sm:border sm:-mr-[1px] sm:-mb-[1px] text-muted-foreground/60 hover:text-black">
        <div className="h-16 flex items-center px-4 gap-x-1 border-b border-dotted">
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
                <p>Set global font</p>
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
                <p>Set global icon</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex-grow p-6">{children}</div>
        <div className="h-16 flex items-center px-4 text-xs justify-between border-t border-dotted">
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" onClick={onLogoDownload}>
                    <DownloadSimple />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download Logo</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {/* <Button size="sm" variant="ghost" className="!text-inherit" asChild>
              <Link href={`/logos/${id}`}>
                <Eye />
              </Link>
            </Button> */}
            <Button size="sm" variant="ghost" asChild>
              <Link href={`/logos/${id}`}>
                <ArrowSquareIn />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  },
);

LogoItem.displayName = 'LogoItem';

export { LogoItem };
