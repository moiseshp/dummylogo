'use client';
import { Button } from '@/components/ui/button';
import { useLogoStore } from '@/app/(logo)/(hooks)/use-logo-store';
import { ArrowClockwise } from '@phosphor-icons/react';

export const ResetButton = () => {
  const reset = useLogoStore((state) => state.reset);

  return (
    <Button variant="ghost" onClick={reset}>
      <ArrowClockwise />
      <span className="hidden lg:block">Reset all</span>
    </Button>
  );
};
