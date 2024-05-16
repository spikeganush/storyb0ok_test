import { cn } from '../../utils/helper';
import React from 'react';

export type TLinksProps = {
  text: string;
  url: string;
  type?: 'simple' | 'arrow';
  colours?:
    | 'text-acu-red-100'
    | 'text-acu-charcoal-100'
    | 'text-acu-charcoal-120'
    | 'text-acu-purple-100'
    | 'text-acu-black-80';
  style?: string;
};

const Links = ({
  text,
  url,
  type = 'simple',
  colours = 'text-acu-charcoal-100',
  style = '',
}: TLinksProps) => {
  return (
    <a
      href={url}
      className={cn(
        'acu-focus inline-block no-underline focus-within:underline hover:underline',
        colours,
        style,
        {
          "after:ml-2 after:inline-block after:content-['→']": type === 'arrow',
        },
      )}
    >
      {text}
    </a>
  );
};

export default Links;
