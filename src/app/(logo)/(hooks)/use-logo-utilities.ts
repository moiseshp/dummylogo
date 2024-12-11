import { layoutItems } from '@/app/(logo)/(utils)/layout-items';
import { useLogoStore } from '@/app/(logo)/(hooks)/use-logo-store';
import type { Customization, Layout, Logo } from '@/app/(logo)/(types)/logo';
import { downloadImage } from '@/lib/download-image';
import { createCanvasLogo } from '@/app/(logo)/(utils)/create-canvas-logo';

export function useLogoUtilities() {
  const name = useLogoStore((state) => state.name);
  const color = useLogoStore((state) => state.color);
  const bgColor = useLogoStore((state) => state.bgColor);
  const layout = useLogoStore((state) => state.layout);
  const iconStyle = useLogoStore((state) => state.iconStyle);
  const iconSize = useLogoStore((state) => state.iconSize);
  const iconName = useLogoStore((state) => state.iconName);
  const styles = useLogoStore((state) => state.styles);

  const buildCustomization = (logo: Logo): Customization => {
    return {
      name: name || 'dummylogo',
      layout: layoutItems[layout] as Layout,
      iconName: iconName || logo.iconName,
      styles: styles || logo.styles,
      color,
      iconStyle,
      bgColor,
      iconSize,
    };
  };

  const downloadLogo = async (
    customization: Customization,
    svgIcon: string,
    filename?: string,
  ) => {
    const canvasUrl = await createCanvasLogo({ customization, svgIcon });
    downloadImage(canvasUrl, filename);
  };

  return {
    initCustomization: {
      iconName,
      styles,
    },
    downloadLogo,
    buildCustomization,
  };
}
