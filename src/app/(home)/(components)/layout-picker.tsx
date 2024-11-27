import { Button } from '@/components/ui/button';
import { ChevronDownIcon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLogoStore } from '@/app/(home)/(hooks)/use-logo-store';
import { TLayout } from '../(types)/logo';

export const LayoutPicker = () => {
  const layout = useLogoStore((state) => state.layout);
  const setLayout = useLogoStore((state) => state.setLayout);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          Layout
          <ChevronDownIcon className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={layout}
          onValueChange={(value) => setLayout(value as TLayout)}
        >
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="left">Left</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
