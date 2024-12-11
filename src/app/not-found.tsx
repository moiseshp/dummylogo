import { Button } from '@/components/ui/button';
import { ArrowLeft, SmileyXEyes } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center flex-grow">
      <div className="flex flex-col items-center gap-y-6">
        <SmileyXEyes className="h-32 w-32" weight="fill" />
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          404: Page Not Found
        </h1>
        <p>Oops! This page doesn’t exist</p>
        <Button asChild size="lg">
          <Link href="/">
            <ArrowLeft />
            Go Back
          </Link>
        </Button>
      </div>
    </div>
  );
}
