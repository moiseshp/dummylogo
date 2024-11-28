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
import { Layout } from '@/app/(home)/(types)/logo';

const layoutOptions: Layout[] = ['top', 'right', 'bottom', 'left'];

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
