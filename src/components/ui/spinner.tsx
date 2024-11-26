import { cn } from '@/lib/utils';
import { IconLoader2 } from '@tabler/icons-react';

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
      <IconLoader2 className="animate-spin dark:text-white" />
    </div>
  );
};

export { Spinner };
