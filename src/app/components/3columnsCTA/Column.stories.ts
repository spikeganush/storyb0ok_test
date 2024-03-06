import type { Meta, StoryObj } from '@storybook/react';
import Column from './Column';

const meta = {
  title: 'Example/3ColumnsCTA/Column',
  component: Column,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the `Column` component to display a column within a three-column layout. This component supports an image, a title, and a subtitle. Each column can be individually configured with content, making it versatile for various use cases.',
      },
    },
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Position of the column',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    img: {
      control: 'text',
      description: 'Image URL',
      table: {
        type: { summary: 'string' },
      },
    },
    title: {
      control: 'text',
      description: 'Title',
      table: {
        type: { summary: 'string' },
      },
    },
    titleBold: {
      control: 'boolean',
      description: 'Bold title',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle',
      table: {
        type: { summary: 'string' },
      },
    },
    subtitleBold: {
      control: 'boolean',
      description: 'Bold subtitle',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Column>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Left: Story = {
  args: {
    position: 'left',
    img: 'https://vision2033.acu.edu.au/-/media/vision2023/icons/flourishing-lives.svg?la=en&hash=DD759D33B5718C998054C69B8E44BF39',
    title: 'Flourishing lives',
    titleBold: false,
    subtitle: 'We will enable flourishing lives.',
    subtitleBold: false,
  },
};

export const Center: Story = {
  args: {
    position: 'center',
    img: 'https://vision2033.acu.edu.au/-/media/vision2023/icons/thriving-communities.svg?la=en&hash=F9F56F7A509F45A5A36FD752E32539F2',
    title: 'Thriving communities',
    titleBold: false,
    subtitle: 'We will foster thriving communities.',
    subtitleBold: false,
  },
};

export const Right: Story = {
  args: {
    position: 'right',
    img: 'https://vision2033.acu.edu.au/-/media/vision2023/icons/ethical-future.svg?la=en&hash=5B6F2F3E4E5C7B3A2D3C4E5F6A7B8C9D',
    title: 'Ethical future',
    titleBold: false,
    subtitle: 'We will build an ethical future.',
    subtitleBold: false,
  },
};

export const LeftBold: Story = {
  args: {
    position: 'left',
    img: 'https://vision2033.acu.edu.au/-/media/vision2023/icons/no1.svg?la=en&hash=DA27CEB4E81DB1936D173757A2C09ACE',
    title: 'Impact phase 1',
    titleBold: true,
    subtitle: '(2024-2027)',
    subtitleBold: true,
  },
};

export const CenterBold: Story = {
  args: {
    position: 'center',
    img: 'https://vision2033.acu.edu.au/-/media/vision2023/icons/no2.svg?la=en&hash=5A6B7C8D9E0F1A2B3C4D5E6F7A8B9C0D',
    title: 'Impact phase 2',
    titleBold: true,
    subtitle: '(2028-2031)',
    subtitleBold: true,
  },
};

export const RightBold: Story = {
  args: {
    position: 'right',
    img: 'https://vision2033.acu.edu.au/-/media/vision2023/icons/no3.svg?la=en&hash=1A2B3C4D5E6F7A8B9C0D1E2F3A4B5C6D',
    title: 'Impact phase 3',
    titleBold: true,
    subtitle: '(2032-2035)',
    subtitleBold: true,
  },
};
