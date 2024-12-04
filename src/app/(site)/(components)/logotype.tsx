import * as React from 'react';
import { cn } from '@/lib/utils';
import { Customization } from '@/app/(site)/(types)/logo';
import { Icon } from '@/components/ui/icon';

const Logotype: React.FC<Customization> = React.memo(
  ({ color, layout, iconName, iconStyle, styles, name }) => {
    return (
      <div
        className={cn('flex items-center gap-x-3 gap-y-1', layout)}
        style={{ color: color }}
      >
        <div className="w-10 h-10 flex items-center justify-center">
          <Icon name={iconName} weight={iconStyle} className="w-10 h-10" />
        </div>
        <p style={styles}>{name}</p>
      </div>
    );
  },
);

Logotype.displayName = 'Logotype';

export { Logotype };
