import { cn } from '../../utils/helper';
import React from 'react';
import { ButtonCTAProps } from './type';

const ButtonCTA = ({ url, text, type, button_color = 'red', style }: ButtonCTAProps) => {
  const bgColor =
    button_color === 'red'
      ? 'bg-acu-red-100'
      : button_color === 'grey'
        ? 'bg-acu-black-40'
        : 'bg-acu-purple-100';
  const textColor =
    button_color === 'red'
      ? 'hover:text-acu-red-100'
      : button_color === 'grey'
        ? 'hover:text-acu-black-40'
        : 'hover:text-acu-purple-100';
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      className={cn(
        'acu-focus font-semibold text-acu-red-100',
        {
          'mt-2 cursor-pointer no-underline after:mr-1 after:inline-block after:text-[1.5rem] after:leading-[0] after:text-black after:content-["→"] hover:underline':
            type === 'arrow',
          'border border-white px-4 py-2 text-white duration-500 hover:bg-acu-white':
            type === 'button',
          [bgColor]: type === 'button',
          [textColor]: type === 'button',
        },
        style,
      )}
    >
      {text}
    </a>
  );
};

export default ButtonCTA;
