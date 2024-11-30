'use client';
import { BrandLogo } from '@/components/brand-logo';
import { LogoNameEditor } from './logo-name-editor';
import Link from 'next/link';
import { CategoryPicker } from './category-picker';
import { LayoutPicker } from './layout-picker';
import { ThemeToggle } from '@/components/theme-toggle';
import { ColorPicker } from './color-picker';
import { ResetButton } from './reset-button';

export const Navbar = () => {
  return (
    <div className="h-16 flex items-center justify-between gap-x-10 px-6">
      <Link href="/">
        <BrandLogo />
      </Link>
      <nav className="flex items-center gap-x-2 h-full text-muted-foreground">
        <ThemeToggle />
        <CategoryPicker />
        <LogoNameEditor />
        <LayoutPicker />
        <ColorPicker />
        <ResetButton />
      </nav>
    </div>
  );
};
