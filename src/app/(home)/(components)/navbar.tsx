'use client';
import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const menuItems = [
  {
    route: '/',
    text: 'All Logos',
  },
  {
    route: '/favorites',
    text: 'Favorites',
  },
  {
    route: '/examples',
    text: 'Examples',
  },
];

export const Navbar = () => {
  // const path = usePathname();

  return (
    <header className="sticky top-0 border-b h-24">
      <div className="container h-full flex items-center justify-between mx-auto">
        <div>Dummylogo</div>
        <nav className="flex gap-x-4 h-full">
          {/* {menuItems.map(({ route, text }) => (
            <Link
              key={route}
              href={route}
              className={cn(
                'px-4 transition border-b hover:border-black flex items-center -mb-[1px]',
                route === path && 'bg-slate-100',
              )}
            >
              {text}
            </Link>
          ))} */}
        </nav>
      </div>
    </header>
  );
};
