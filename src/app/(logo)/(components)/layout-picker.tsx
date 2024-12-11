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
import { useLogoStore } from '@/app/(logo)/(hooks)/use-logo-store';
import { Layout } from '@/app/(logo)/(types)/logo';
import { CaretDown } from '@phosphor-icons/react';

const layoutOptions: Layout[] = ['top', 'right', 'bottom', 'left'];

export const LayoutPicker = () => {
  const layout = useLogoStore((state) => state.layout);
  const setLayout = useLogoStore((state) => state.setLayout);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          Layout
          <CaretDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Icon Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={layout}
          onValueChange={(value) => setLayout(value as Layout)}
        >
          {layoutOptions.map((item) => (
            <DropdownMenuRadioItem
              key={item}
              value={item}
              className="first-letter:uppercase"
            >
              {item}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
