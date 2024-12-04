import { FabricText, loadSVGFromString, StaticCanvas, util } from 'fabric';
import { Customization } from '@/app/(site)/(types)/logo';
import { layoutItems } from './layout-items';

const GAP_H_LEFT = 9;
const GAP_H_RIGHT = 14;
const GAP_V_TOP = 5;
const GAP_V_BOTTOM = 6;
const MULTIPLIER = 3;

export async function createCanvasLogo({
  customization,
  svgIcon,
}: {
  customization: Customization;
  svgIcon: string;
}) {
  const text = getText(customization);
  const icon = await getIcon(svgIcon, text, customization);
  const canvas = new StaticCanvas('canvas', {
    ...getCanvasSize(customization, text),
  });

  canvas.add(icon, text);
  canvas.renderAll();

  return canvas.toDataURL({
    multiplier: MULTIPLIER,
  });
}

function getCanvasSize({ layout, iconSize }: Customization, text: any) {
  if ([layoutItems.top, layoutItems.bottom].includes(layout)) {
    return {
      width: text.width,
      height: iconSize! + GAP_V_TOP + text.height,
    };
  }

  return {
    width: iconSize! + GAP_H_LEFT + text.width,
    height: iconSize,
  };
}

async function getIcon(
  svgIcon: string,
  text: any,
  { layout, iconSize }: Customization,
) {
  const { objects, options }: any = await loadSVGFromString(svgIcon);
  const icon = util.groupSVGElements(objects, options);
  icon.backgroundColor = 'red';

  if (layout === layoutItems.top) {
    icon.top = 0;
    icon.left = text.width / 2 - iconSize! / 2;
    return icon;
  }

  if (layout === layoutItems.right) {
    icon.top = 0;
    icon.left = text.width + GAP_H_RIGHT;
    return icon;
  }

  if (layout === layoutItems.bottom) {
    icon.top = text.height + GAP_V_BOTTOM;
    icon.left = text.width / 2 - iconSize! / 2;
    return icon;
  }

  icon.top = 0;
  icon.left = 0;

  return icon;
}

function getText({ name, color, iconSize, styles, layout }: Customization) {
  const text = new FabricText(name as string, {
    fontFamily: styles?.fontFamily,
    fontWeight: styles?.fontWeight,
    fontSize: styles?.fontSize as number,
    backgroundColor: '#FF00cc',
    fill: color,
  });

  if (layout === layoutItems.top) {
    text.top = iconSize! + GAP_V_TOP;
    text.left = 0;
    return text;
  }

  if (layout === layoutItems.right) {
    text.top = (iconSize! - text.height + Number(styles?.marginTop || 0)) / 2;
    text.left = 0;
    return text;
  }

  if (layout === layoutItems.left) {
    text.top = (iconSize! - text.height - Number(styles?.marginTop || 0)) / 2;
    text.left = iconSize! + GAP_H_RIGHT;
    return text;
  }

  text.top = 0;
  text.left = 0;

  return text;
}

// const createLetterSpacedText = (text, options, letterSpacing) => {
//   let leftPosition = 0;

//   const letters = text.split('').map((char) => {
//     const letter = new fabric.Text(char, {
//       ...options,
//       left: leftPosition,
//     });
//     leftPosition += letter.width + letterSpacing; // Incrementa según el ancho del carácter y el espaciado.
//     return letter;
//   });

//   return new fabric.Group(letters, {
//     originX: 'center',
//     originY: 'center',
//   });
// };

// // Ejemplo de uso
// const letterSpacedText = createLetterSpacedText('FabricJS', {
//   fontSize: 40,
//   fontFamily: 'Arial',
//   fill: 'black',
// }, 5); // Espaciado entre letras: 5px
