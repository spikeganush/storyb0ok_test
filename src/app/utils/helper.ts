import { twMerge } from 'tailwind-merge';
import { AcuColors, COLOURS } from './constants';
import { clsx, ClassValue } from 'clsx';

export const processColors = (colors: AcuColors) => {
  const colorEntries: { color: string; hex: string }[] = [];
  Object.entries(colors).forEach(([colorName, value]) => {
    if (typeof value === 'string') {
      // console.log(`${colorName}: ${value}`);
      colorEntries.push({ color: colorName, hex: value });
    } else {
      Object.entries(value).forEach(([shade, hex]) => {
        // console.log(`${colorName}-${shade}: ${hex}`);
        colorEntries.push({ color: `${colorName}-${shade}`, hex });
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

export const handleEventAndBlur = (
  e:
    | React.MouseEvent<HTMLDivElement, MouseEvent>
    | React.KeyboardEvent<HTMLDivElement>
    | React.MouseEvent<HTMLButtonElement, MouseEvent>
    | React.KeyboardEvent<HTMLButtonElement>,
  ref: React.RefObject<HTMLDivElement> | React.RefObject<HTMLButtonElement>,
  callback: () => void, // Additional actions to perform after the shared behavior
) => {
  e.preventDefault();
  e.stopPropagation();
  ref.current?.blur();
  callback(); // Execute any additional logic specific to the caller
};

export const easeOut = (x: number) => {
  return 1 - Math.pow(1 - x, 3);
};
