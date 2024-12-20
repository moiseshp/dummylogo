import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkle } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

export const DummyLogoBanner = () => {
  return (
    <Link
      href="/"
      className="border rounded-lg px-5 py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:bg-secondary transition"
    >
      <div className="flex gap-4">
        <Sparkle className="hidden sm:block w-6 h-6" />
        <div>
          <strong className="mr-1">Do you want to create your own logo?</strong>
          <span>
            Visit
            <strong className="mx-1">DummyLogo Maker</strong>
            and create as many logos as you want.
          </span>
        </div>
      </div>
      <Button>
        Go to DummyLogo
        <ArrowRight />
      </Button>
    </Link>
  );
};
