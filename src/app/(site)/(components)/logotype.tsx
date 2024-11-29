import * as React from 'react';
import { cn } from '@/lib/utils';
import { Logo } from '@/app/(site)/(types)/logo';
import { Icon } from '@/components/ui/icon';

const Logotype: React.FC<Logo> = React.memo(
  ({ fontFamily, fontSize, fontWeight, iconName, iconSize, customization }) => {
    return (
      <div
        className={cn('flex items-center gap-3', customization?.layout)}
        style={{ color: customization?.color }}
      >
        <div className="flex items-center justify-center">
          <Icon
            name={iconName as any}
            strokeWidth={1.3}
            style={{ width: iconSize, height: iconSize }}
          />
        </div>
        <p style={{ fontFamily, fontSize, fontWeight }}>
          {customization?.name}
        </p>
      </div>
    );
  },
);

Logotype.displayName = 'Logotype';

export { Logotype };
