'use client';
import Link from 'next/link';
import { BrandLogo } from '@/components/brand-logo';
import { LogoNameEditor } from '@/app/(logo)/(components)/logo-name-editor';
import { LayoutPicker } from '@/app/(logo)/(components)/layout-picker';
import { ResetButton } from '@/app/(logo)/(components)/reset-button';
import { IconStyleSelector } from '@/app/(logo)/(components)/icon-style-selector';
import { TextColorPicker } from '@/app/(logo)/(components)/text-color-picker';
import { BgColorPicker } from '@/app/(logo)/(components)/bg-color-picker';
import { ThemeToggle } from '@/components/theme-toggle';
import { List } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { GithubLogo } from '@phosphor-icons/react/dist/ssr';

export const Navbar = () => {
  return (
    <div className="h-16 flex items-center justify-between gap-x-2 lg:gap-x-10 px-4 lg:px-6">
      <Link href="/">
        <BrandLogo />
      </Link>
      <nav className="items-center gap-x-2 h-full hidden md:flex">
        <LogoNameEditor />
        <LayoutPicker />
        <IconStyleSelector />
        <TextColorPicker />
        <BgColorPicker />
        <ResetButton />
        <Button variant="ghost" size="icon" asChild>
          <a
            href="https://github.com/moiseshp/dummylogo"
            target="_blank"
            title="Go to github project"
            className="font-semibold"
          >
            <GithubLogo />
          </a>
        </Button>
        <ThemeToggle />
      </nav>
      <nav className="block md:hidden">
        <Button variant="ghost" size="icon">
          <List />
        </Button>
      </nav>
    </div>
  );
};
