import * as React from 'react';
import { cn } from '@/lib/utils';
import { Logo } from '@/app/(site)/(types)/logo';
import { Icon } from '@/components/ui/icon';

const Logotype: React.FC<Logo> = React.memo(
  ({ styles, iconName, customization }) => {
    return (
      <div
        className={cn(
          'flex items-center gap-x-3 gap-y-1',
          customization?.layout,
        )}
        style={{ color: customization?.color }}
      >
        <span className="w-9 h-9 flex items-center justify-center">
          <Icon name={iconName} size={38} weight={customization?.iconStyle} />
        </span>
        <p style={styles}>{customization?.name}</p>
      </div>
    );
  },
);

Logotype.displayName = 'Logotype';

export { Logotype };
