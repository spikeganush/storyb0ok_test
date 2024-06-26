import { twMerge } from 'tailwind-merge';
import { AcuColours, COLOURS, HexColoursValue } from './constants';
import { clsx, ClassValue } from 'clsx';

export const processColors = (colours: AcuColours): { colour: string; hex: string }[] => {
  const colorEntries: { colour: string; hex: string }[] = [];
  Object.entries(colours).forEach(([colorName, value]) => {
    if (typeof value === 'string') {
      // console.log(`${colorName}: ${value}`);
      colorEntries.push({ colour: colorName, hex: value });
    } else {
      Object.entries(value).forEach(([shade, hex]) => {
        // console.log(`${colorName}-${shade}: ${hex}`);
        colorEntries.push({ colour: `${colorName}-${shade}`, hex });
      });
    }
  });
  return colorEntries;
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const findKeyPathForValue = (obj: any, targetValue: string): string | null => {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      if (value === targetValue) {
        // Found the color name with a direct string value (no shades)
        return key;
      }
    } else {
      // @ts-ignore
      for (const [shadeKey, shadeValue] of Object.entries(value)) {
        if (shadeValue === targetValue) {
          // Found the color name and shade
          return `${key}-${shadeKey}`;
        }
      }
    }
  }
  // If the value wasn't found
  return null;
};

type TPrefix =
  | 'text'
  | 'bg'
  | 'border'
  | 'ring'
  | 'ring-offset'
  | 'divide'
  | 'placeholder'
  | 'from'
  | 'via'
  | 'to';

export const getTWNameWithPrefix = (prefix: TPrefix, value: string): string => {
  const keyPath = findKeyPathForValue(COLOURS, value);
  if (keyPath) {
    return `${prefix}-${keyPath}`;
  }
  return '';
};

const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

export const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

export type TLink = {
  text: string;
  url: string;
  targetOut?: boolean;
};

export const debounce = (func: Function, wait: number, immediate = false) => {
  let timeout: NodeJS.Timeout | null;
  return function (this: any, ...args: any[]) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    timeout && clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// Function to get the colour name based on the value
export const nameColours = (value: HexColoursValue): string | null => {
  for (const colourName in COLOURS) {
    const shades = COLOURS[colourName as keyof typeof COLOURS];
    if (typeof shades === 'string') {
      if (shades === value) {
        return colourName;
      }
    } else {
      for (const shade in shades) {
        if (shades[shade as keyof typeof shades] === value) {
          return `${colourName}-${shade}`;
        }
      }
    }
  }
  return null; // Return null if no match is found
};
