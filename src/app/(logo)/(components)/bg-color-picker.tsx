'use client';
import { Button } from '@/components/ui/button';
import { ColorPicker as ColorPickerUI } from '@/components/ui/color-picker';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLogoStore } from '@/app/(logo)/(hooks)/use-logo-store';

export const BgColorPicker = () => {
  const bgColor = useLogoStore((state) => state.bgColor);
  const setBgColor = useLogoStore((state) => state.setBgColor);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          BG Color
          <span
            className="w-3 h-3 rounded-full border border-muted-foreground"
            style={{ backgroundColor: bgColor }}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>BG Color Picker</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ColorPickerUI value={bgColor} onChange={setBgColor} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
