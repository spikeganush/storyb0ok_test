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
   * Subtitle of the accordion
   * @required
   * @type string
   */
  subtitle: string;
  /**
   * Color of the subtitle
   * @optional
   * @type string
   */
  subtitleColor?: string;
  /**
   * Content of the accordion
   * @required
   * @type React.ReactNode
   */
  children: React.ReactNode;

  /**
   * Callback for the accordion to report its open state
   * @optional
   * @type () => void
   */
  onToggle?: (open: boolean) => void;
};

type TTitleObject = {
  title: string;
  subtitle: string;
  subtitleColor?: string;
};

export type TAccordionTitleProps = {
  titleObject: TTitleObject;
  isOpen: boolean;
  style?: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onToggle?: (open: boolean) => void;
};

export type TAccordionsProps = {
  /**
   * Array of accordion props
   * @required
   * @type TAccordionProps[]
   */
  accordion: TAccordionProps[];
  /**
   * Title of the accordions
   * @required
   * @type string
   */
  title: string;
};
