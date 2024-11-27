'use client';
import * as React from 'react';
import { BrandLogo } from '@/components/brand-logo';
import { ChevronDown, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import TextEditor from './text-editor';

export const Navbar = () => {
  return (
    <div className="h-16 flex items-center justify-between gap-x-10 px-6">
      <Link href="/">
        <BrandLogo />
      </Link>
      <nav className="flex items-center gap-x-4 h-full text-muted-foreground">
        <TextEditor />
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
