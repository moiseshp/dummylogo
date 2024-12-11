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

export const ColorPicker = () => {
  const color = useLogoStore((state) => state.color);
  const setColor = useLogoStore((state) => state.setColor);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          Color
          <span
            className="w-3 h-3 rounded-full border border-muted-foreground"
            style={{ backgroundColor: color }}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Color Picker</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ColorPickerUI value={color} onChange={setColor} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
