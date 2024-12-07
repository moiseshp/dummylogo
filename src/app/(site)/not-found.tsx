import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarHeart } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh px-4 py-8 bg-gray-50">
      <div className="text-center">
        <CalendarHeart className="mx-auto h-24 w-24" />
        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
          Not found page
        </h1>
        <p className="mt-2 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
          Ups!
        </p>
        <div className="mt-10">
          <Button asChild size="lg">
            <Link href="/">
              <ArrowLeft />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
