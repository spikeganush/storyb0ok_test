import { TLink } from '@/app/utils/helper';

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
  /**
   * Callback for the accordion to report its open state
   * @optional
   * @type () => void
   */
  onToggle?: (open: boolean) => void;
};

export type TAccordionsProps = {
  /**
   * Array of accordion props
   * @required
   * @type TAccordionProps[]
   */
  accordion: TAccordionProps[];
};
