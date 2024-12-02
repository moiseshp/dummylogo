import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CaretDown, iconStyle } from '@phosphor-icons/react';
import { useLogoStore } from '../(hooks)/use-logo-store';

const options = [
  { id: 'fill', name: 'Fill' },
  { id: 'regular', name: 'Outlined' },
  { id: 'duotone', name: 'Duotone' },
];

export const IconStyleSelector = () => {
  const iconStyle = useLogoStore((state) => state.iconStyle);
  const seticonStyle = useLogoStore((state) => state.seticonStyle);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          Icon style
          <CaretDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={iconStyle}
          onValueChange={(value) => seticonStyle(value as iconStyle)}
        >
          {options.map((item) => (
            <DropdownMenuRadioItem key={item.id} value={item.id}>
              {item.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
