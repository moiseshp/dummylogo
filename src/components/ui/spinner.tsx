import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const Spinner = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'w-full flex justify-center items-center h-full',
        className,
      )}
      {...props}
    >
      <Loader2 className="animate-spin dark:text-white" />
    </div>
  );
};

export { Spinner };
