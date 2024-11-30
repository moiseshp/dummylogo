import * as React from 'react';
import { Button } from '@/components/ui/button';
// import { ChevronDownIcon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'technology', name: 'Technology' },
  { id: 'environment', name: 'Environment' },
  { id: 'business', name: 'Business' },
  { id: 'health', name: 'Health' },
  { id: 'education', name: 'Education' },
  { id: 'lifestyle', name: 'Lifestyle' },
  { id: 'food-and-beverage', name: 'Food & Beverage' },
  { id: 'finance', name: 'Finance' },
  { id: 'entertainment', name: 'Entertainment' },
  { id: 'travel-and-tourism', name: 'Travel & Tourism' },
];

export const CategoryPicker = () => {
  const [position, setPosition] = React.useState('all');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          Category
          {/* <Chevron className="w-4 h-4" /> */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {categories.map((category) => (
            <DropdownMenuRadioItem key={category.id} value={category.id}>
              {category.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
