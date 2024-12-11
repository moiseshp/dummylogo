import {
  FabricText,
  Group,
  loadSVGFromString,
  Rect,
  StaticCanvas,
  util,
} from 'fabric';
import { Customization } from '@/app/(logo)/(types)/logo';
import { layoutItems } from './layout-items';

export async function createCanvasLogo({
  customization,
  svgIcon,
}: {
  customization: Customization;
  svgIcon: string;
}) {
  const gapH = 8;
  const gapV = 8 / 2;
  const multiplier = 3; // scale

  const { layout, iconSize = 0 } = customization;
  const text = buildText(customization);
  const icon = await buildIcon(svgIcon, iconSize);
  const canvas = new StaticCanvas('canvas');

  if (layout.includes('row')) {
    canvas.width = iconSize + text.width + gapH;
    canvas.height = iconSize;
    canvas.centerObjectV(icon);
    canvas.centerObjectV(text);
  } else {
    canvas.width = text.width;
    canvas.height = iconSize + text.height + gapV;
    canvas.centerObjectH(icon);
    canvas.centerObjectH(text);
  }

  if (layout === layoutItems.top) {
    text.top = iconSize + gapV;
  }

  if (layout === layoutItems.right) {
    icon.left = text.width + gapH;
  }

  if (layout === layoutItems.bottom) {
    icon.top = text.height + gapV;
  }

  if (layout === layoutItems.left) {
    text.left = iconSize + gapH;
  }

  const group = new Group([text, icon]);

  canvas.add(group);
  canvas.renderAll();

  return canvas.toDataURL({ multiplier });
}

async function buildIcon(svgIcon: string, iconSize: number) {
  const { objects }: any = await loadSVGFromString(svgIcon);
  const icon = util.groupSVGElements(objects);
  const box = new Rect({
    width: iconSize,
    height: iconSize,
    fill: 'transparent',
  });

  return new Group([box, icon]);
}

function buildText({ name, color, styles }: Customization) {
  const text = new FabricText(name as string, {
    fontFamily: styles?.fontFamily,
    fontWeight: styles?.fontWeight,
    fontSize: styles?.fontSize as number,
    lineHeight: 1,
    fill: color,
  });

  const marginTopHack = -(Math.abs(styles?.marginTop as number) / 1.5) || 0;
  text.top = marginTopHack;

  const box = new Rect({
    width: text.width,
    height: text.height,
    fill: 'transparent',
  });

  return new Group([box, text]);
}
