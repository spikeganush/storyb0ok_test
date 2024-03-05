/**
 * @param position - 'left' | 'center' | 'right'
 * @param img - string
 * @param title - string
 * @param subtitle - string
 * @returns React.FC
 * @description
 * Column component
 * @example
 * <Column
 * position='left'
 * img='https://vision2033.acu.edu.au/-/media/vision2023/icons/flourishing-lives.svg?la=en&hash=DD759D33B5718C998054C69B8E44BF39'
 * title='Flourishing lives'
 * subtitle='We will enable flourishing lives.'
 * />
 */
export type ColumnProps = {
  position: 'left' | 'center' | 'right';
  img: string;
  title: string;
  subtitle: string;
};

/**
 * @param topSeparator - boolean
 * @param bottomSeparator - boolean
 * @param title - string
 * @param columns - ColumnProps[]
 * @param cta - string
 * @returns React.FC
 * @description
 * 3 columns CTA component
 * @example
 * <ColumnsCta
 * topSeparator={true}
 * bottomSeparator={true}
 * title='Our vision'
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
  title: string;
  columns: ColumnProps[];
  cta?: {
    url: string;
    text: string;
  };
};
