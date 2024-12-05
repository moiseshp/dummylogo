'use client';
import Link from 'next/link';
import { BrandLogo } from '@/components/brand-logo';
import { LogoNameEditor } from './logo-name-editor';
// import { CategorySelector } from './category-selector';
import { LayoutPicker } from './layout-picker';
import { ColorPicker } from './color-picker';
import { ResetButton } from './reset-button';
import { IconStyleSelector } from './icon-style-selector';
import { ThemeToggle } from '@/components/theme-toggle';
import { List } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  return (
    <div className="h-16 flex items-center justify-between gap-x-2 lg:gap-x-10 px-4 lg:px-6">
      <Link href="/">
        <BrandLogo />
      </Link>
      <nav className="items-center gap-x-2 h-full text-muted-foreground hidden md:flex">
        <ThemeToggle />
        {/* <CategorySelector /> */}
        <LogoNameEditor />
        <LayoutPicker />
        <IconStyleSelector />
        <ColorPicker />
        <ResetButton />
      </nav>
      <nav className="block md:hidden">
        <Button variant="ghost" size="icon">
          <List />
        </Button>
      </nav>
    </div>
  );
};
