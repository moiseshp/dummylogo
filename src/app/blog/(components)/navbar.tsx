'use client';
import Link from 'next/link';
import { BrandLogo } from '@/components/brand-logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { List } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  return (
    <div className="h-16 flex items-center justify-between gap-x-2 lg:gap-x-10 px-4 lg:px-6">
      <Link href="/">
        <BrandLogo />
      </Link>
      <nav className="items-center gap-x-2 h-full hidden md:flex text-muted-foreground">
        <Button variant="ghost" asChild>
          <Link href="/">Home</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/blog">Articles</Link>
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
