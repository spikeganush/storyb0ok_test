/**
 * @param position - 'left' | 'center' | 'right'
 * @param img - string
 * @param title - string
 * @param titleBold - boolean
 * @param subtitle - string
 * @param subtitleBold - boolean
 * @returns React.FC
 * @description
 * Column component
 * @example
 * <Column
 * position='left'
 * img='https://vision2033.acu.edu.au/-/media/vision2023/icons/flourishing-lives.svg?la=en&hash=DD759D33B5718C998054C69B8E44BF39'
 * title='Flourishing lives'
 * titleBold={false}
 * subtitle='We will enable flourishing lives.'
 * subtitleBold={false}
 * />
 */
export type ColumnProps = {
  position: 'left' | 'center' | 'right';
  img: string;
  title: string;
  titleBold?: boolean;
  subtitle: string;
  subtitleBold?: boolean;
};

/**
 * @param topSeparator - boolean
 * @param bottomSeparator - boolean
 * @param title - {mainTitle: string, subtitle: string, cta: cta}
 * @param columns - ColumnProps[]
 * @param cta - string
 * @returns React.FC
 * @description
 * 3 columns CTA component
 * @example
 * <ColumnsCta
 * topSeparator={true}
 * bottomSeparator={true}
 * title={
 * mainTitle: 'Our vision',
 * subtitle: 'Our vision is to foster thriving communities, enable flourishing lives and build an ethical future.',
 * cta: {url: 'https://vision2033.acu.edu.au/', text: 'Learn more'}
 * }
 * columns={[
 *  {
 *   position: 'left',
 *  img: 'https://vision2033.acu.edu.au/-/media/vision2023/icons/flourishing-lives.svg?la=en&hash=DD759D33B5718C998054C69B8E44BF39',
 * title: 'Flourishing lives',
 * subtitle: 'We will enable flourishing lives.',
 * },
 * {
 * position: 'center',
 * img: 'https://vision2033.acu.edu.au/-/media/vision2023/icons/thriving-communities.svg?la=en&hash=F9F56F7A509F45A5A36FD752E32539F2',
 * title: 'Thriving communities',
 * subtitle: 'We will foster thriving communities.',
 * },
 * {
 * position: 'right',
 * img: 'https://vision2033.acu.edu.au/-/media/vision2023/icons/ethical-future.ash',
 * title: 'Ethical future',
 * subtitle: 'We will build an ethical future.',
 * },
 * ]}
 * cta='Learn more'
 * />
 */
export type ColumnsCtaProps = {
  topSeparator?: boolean;
  bottomSeparator?: boolean;
  title?: ColumnCtaTitleProps;
  columns: ColumnProps[];
  cta?: cta;
};

export type ColumnCtaTitleProps = {
  mainTitle?: string;
  subtitle?: string;
  cta?: cta;
};

export type cta = {
  url: string;
  text: string;
};
