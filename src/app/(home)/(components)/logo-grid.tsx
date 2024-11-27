'use client';
import Link from 'next/link';
import { useLogoStore } from '@/app/(home)/(hooks)/use-logo-store';

export const LogoGrid = () => {
  const text = useLogoStore((state) => state.text);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-0 -mt-[1px]">
      {Array.from({ length: 40 }).map((_, i) => (
        <Link
          href={`/logo-${i + 1}`}
          key={i}
          className="flex items-center bg-white justify-center h-96 border -mr-[1px] -mb-[1px]"
        >
          <div className="p-20">
            <p>{text || i + 1}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
