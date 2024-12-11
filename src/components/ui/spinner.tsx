import { cn } from '@/lib/utils';
import { CircleNotch } from '@phosphor-icons/react/dist/ssr';

const Spinner = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <CircleNotch className="animate-spin w-8 h-8" />
    </div>
  );
};

export { Spinner };
