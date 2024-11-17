import { TLink } from '@/app/helper';
import React from 'react';

export type TAccordionType = 'plus' | 'border';

export type TAccordionContentPlusProps = {
  /**
   * Links in the accordion
   * @required
   * @type TLink[]
   */
  links: TLink[];
  /**
   * Image of the accordion
   * @optional
   * @type string
   */
  image?: string;
};

export type TAccordionProps = {
  /**
   * Accordion is open or not
   * @optional
   * @type boolean
   * @default false
   */
  open?: boolean;
  /**
   * Title of the accordion
   * @required
   * @type string
   */
  title: string;
  /**
   * Content of the accordion
   * @required
   * @type TAccordionContentPlusProps | string | JSX.Element
   * @default ''
   * @example <AccordionContentPlus links={[]} />
   * @example 'Content of the accordion'
   * @example <div>Content of the accordion</div>
   */
  content: TAccordionContentPlusProps | string;
  /**
   * Callback for the accordion to report its open state
   * @optional
   * @type () => void
   */
  onToggle?: (open: boolean) => void;
  /**
   * Type of accordion
   * @optional
   * @type 'plus' | 'border'
   */
  type?: TAccordionType;
  /**
   * Index of the accordion
   * @optional
   * @type number
   *
   */
  index?: number;
};

export type TAccordionsProps = {
  /**
   * Array of accordion props
   * @required
   * @type TAccordionProps[]
   *
   * Type of accordion
   * @optional
   * @type 'plus' | 'border'
   */
  accordion: TAccordionProps[];
  type?: TAccordionType;
};
