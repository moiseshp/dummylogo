'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import type { Logo } from '@/app/(logo)/(types)/logo';
import Link from 'next/link';
import {
  ArrowRight,
  CheckSquare,
  Copy,
  DownloadSimple,
  PhosphorLogo,
  Square,
} from '@phosphor-icons/react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { toast } from 'sonner';
import { BASE_URL } from '@/lib/config';

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
    const { copyToClipboard } = useCopyToClipboard();
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
                  aria-label={`Set ${styles.fontFamily} as global font to your logo`}
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
                  aria-label={`Set ${iconName} as global icon to your logo`}
                >
                  <PhosphorLogo weight="fill" color="#3C402B" />
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
                  <Button
                    variant="ghost"
                    onClick={onLogoDownload}
                    aria-label={`Download dummylogo: ${id}`}
                  >
                    <DownloadSimple />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download Logo</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      copyToClipboard(`${BASE_URL}/logos/${id}`);
                      toast.success('Link copied!');
                    }}
                    aria-label={`Clipboard dummylogo: ${id}`}
                  >
                    <Copy />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy Link</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Button size="sm" variant="ghost" asChild>
            <Link href={`/logos/${id}`} title={`See dummylogo ${id}`}>
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    );
  },
);

LogoItem.displayName = 'LogoItem';

export { LogoItem };
