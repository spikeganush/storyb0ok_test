import { cn } from '../../utils/helper';
import React from 'react';
import { TLinksProps } from './type';

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
