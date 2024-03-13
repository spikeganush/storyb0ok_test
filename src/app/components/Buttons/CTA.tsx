import { cn } from '../../utils/helper';
import React from 'react';

type ButtonCTAProps = {
  url: string;
  text: string;
  style?: string;
};

const ButtonCTA = ({ url, text, style }: ButtonCTAProps) => {
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      className={cn('cta--right-arrow font-semibold text-acu-red-100', style)}
    >
      {text}
    </a>
  );
};

export default ButtonCTA;
