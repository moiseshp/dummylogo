import { getInitialColor } from '@/app/(site)/(utils)/get-initial-color';
import { layoutItems } from '@/app/(site)/(utils)/layout-items';
import { useLogoStore } from '@/app/(site)/(hooks)/use-logo-store';
import type { Customization, Layout, Logo } from '@/app/(site)/(types)/logo';
import { useTheme } from 'next-themes';

export function useCustomization() {
  const name = useLogoStore((state) => state.name);
  const color = useLogoStore((state) => state.color);
  const layout = useLogoStore((state) => state.layout);
  const iconStyle = useLogoStore((state) => state.iconStyle);
  const iconSize = useLogoStore((state) => state.iconSize);
  const iconName = useLogoStore((state) => state.iconName);
  const styles = useLogoStore((state) => state.styles);
  const { resolvedTheme } = useTheme();

  const buildCustomization = (logo: Logo): Customization => {
    return {
      name: name || 'dummylogo',
      color: color || getInitialColor(resolvedTheme),
      layout: layoutItems[layout] as Layout,
      iconName: iconName || logo.iconName,
      styles: styles || logo.styles,
      iconStyle,
      iconSize,
    };
  };

  return {
    initCustomization: {
      iconName,
      styles,
    },
    buildCustomization,
  };
}
