import * as React from 'react';
import { cn } from '@/lib/utils';
import { ILogo } from '@/app/(home)/(types)/logo';

const layoutItems = {
  left: 'flex-row',
  right: 'flex-row-reverse',
  top: 'flex-col',
  bottom: 'flex-col-reverse',
};

const Logotype: React.FC<Partial<ILogo>> = React.memo(
  ({ layout, color, text }) => {
    return (
      <div className="flex-grow flex items-center justify-center">
        <div
          className={cn('flex items-center gap-4', layoutItems[layout!])}
          style={{ color }}
        >
          <span>¿i?</span>
          <p className="text-2xl font-bold">{text}</p>
        </div>
      </div>
    );
  },
);

Logotype.displayName = 'Logotype';

export { Logotype };
