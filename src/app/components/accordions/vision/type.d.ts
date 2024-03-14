export type TParagraph = {
  bold?: boolean;
  text: string;
};

export type TLeftPart = {
  title: string;
  subtitle: string;
  img?: string;
};

export type TAccordionItem = {
  img?: string;
  title: string;
  subtitle: string;
  paragraphs: TParagraph[];
};

export type TAccordionsProps = {
  leftPart?: TLeftPart;
  accordions: TAccordionItem[];
};

export type TAccordionProps = {
  leftPart?: LeftPart;
  accordion: TAccordionItem;
};
