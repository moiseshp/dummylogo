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
import { CaretDown, IconWeight } from '@phosphor-icons/react';
import { useLogoStore } from '../(hooks)/use-logo-store';

const options = [
  { id: 'fill', name: 'Fill' },
  { id: 'regular', name: 'Outlined' },
  { id: 'duotone', name: 'Duotone' },
];

export const IconStyleSelector = () => {
  const iconStyle = useLogoStore((state) => state.iconStyle);
  const setIconStyle = useLogoStore((state) => state.setIconStyle);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          Style
          <CaretDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Icon Style</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={iconStyle}
          onValueChange={(value) => setIconStyle(value as IconWeight)}
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
