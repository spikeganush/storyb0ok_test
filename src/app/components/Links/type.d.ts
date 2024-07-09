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
