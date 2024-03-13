import { twMerge } from 'tailwind-merge';
import { AcuColors } from './constants';
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
