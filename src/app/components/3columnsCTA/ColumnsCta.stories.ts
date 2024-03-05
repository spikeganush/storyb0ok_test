import type { Meta, StoryObj } from '@storybook/react';
import ColumnsCta from './ColumnsCta';
import { ColumnProps } from './type';

const props = {
  topSeparator: true,
  bottomSeparator: true,
  title: 'Our vision',
  columns: [
    {
      position: 'left',
      img: 'https://vision2033.acu.edu.au/-/media/vision2023/icons/flourishing-lives.svg?la=en&hash=DD759D33B5718C998054C69B8E44BF39',
      title: 'Flourishing lives',
      subtitle: 'We will enable flourishing lives.',
    },
    {
      position: 'center',
      img: 'https://vision2033.acu.edu.au/-/media/vision2023/icons/thriving-communities.svg?la=en&hash=F9F56F7A509F45A5A36FD752E32539F2',
      title: 'Thriving communities',
      subtitle: 'We will foster thriving communities.',
    },
    {
      position: 'right',
      img: 'https://vision2033.acu.edu.au/-/media/vision2023/icons/ethical-future.ash',
      title: 'Ethical future',
      subtitle: 'We will build an ethical future.',
    },
  ],
};

const meta = {
  title: 'Example/3ColumnsCTA/ColumnsCta',
  component: ColumnsCta,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ColumnsCta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    topSeparator: props.topSeparator,
    bottomSeparator: props.bottomSeparator,
    title: props.title,
    columns: props.columns as ColumnProps[],
    cta: { text: 'Find out more', url: 'https://www.acu.edu.au/' },
  },
};
