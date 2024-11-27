'use client';
import * as React from 'react';
import { BrandLogo } from '@/components/brand-logo';
// import { Input as InputIcon } from '@/components/ui/input';
import { ChevronDown, Circle, PencilLine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Navbar = () => {
  // const path = usePathname();

  return (
    <div className="h-16 flex items-center justify-between gap-x-10 px-6">
      <BrandLogo />
      <nav className="flex items-center gap-x-20 h-full">
        <div className="flex items-center gap-3 w-96">
          <PencilLine className="w-4 h-4" />
          <Input
            placeholder="Type your text"
            className="border-none shadow-none focus-visible:ring-0"
          />
        </div>
        <Button variant="ghost">
          Categorias
          <ChevronDown className="w-4 h-4" />
        </Button>
        <Button variant="ghost">
          Layout
          <ChevronDown className="w-4 h-4" />
        </Button>
        <Button variant="ghost">
          Color Text
          <Circle className="w-4 h-4" />
        </Button>
        <Button variant="ghost">
          Color Icon
          <Circle className="w-4 h-4" />
        </Button>
        <Button>Reset all</Button>
      </nav>
    </div>
  );
};
