'use client';
import * as React from 'react';
import { BrandLogo } from '@/components/brand-logo';
import { Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LogoNameEditor } from './logo-name-editor';
import Link from 'next/link';
import { CategoryPicker } from './category-picker';
import { LayoutPicker } from './layout-picker';
import { ThemeToggle } from '@/components/theme-toggle';

export const Navbar = () => {
  return (
    <div className="h-16 flex items-center justify-between gap-x-10 px-6">
      <Link href="/">
        <BrandLogo />
      </Link>
      <nav className="flex items-center gap-x-4 h-full text-muted-foreground">
        <ThemeToggle />
        <LogoNameEditor />
        <CategoryPicker />
        <LayoutPicker />
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
