import { cn } from '@/lib/utils';

export const Footer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <footer>
      <div
        className={cn(
          'container text-sm text-muted-foreground py-4 flex justify-center gap-x-1',
          className,
        )}
      >
        <span>{new Date().getFullYear()} © dummylogo by</span>
        <a
          href="https://moiseshp.dev"
          target="_blank"
          className="font-semibold"
        >
          moiseshp.
        </a>
        <span>The source code is available on</span>
        <a
          href="https://github.com/moiseshp/dummylogo"
          target="_blank"
          title="Go to github project"
          className="font-semibold"
        >
          GitHub.
        </a>
      </div>
    </footer>
  );
};
