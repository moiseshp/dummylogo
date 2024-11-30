'use client';
import { Button } from '@/components/ui/button';
import { useLogoStore } from '@/app/(site)/(hooks)/use-logo-store';
import { ArrowClockwise } from '@phosphor-icons/react';

export const ResetButton = () => {
  const reset = useLogoStore((state) => state.reset);

  return (
    <Button variant="ghost" onClick={reset}>
      <ArrowClockwise />
      Reset all
    </Button>
  );
};
