import type { Meta, StoryObj } from '@storybook/react';
import Column from './Column';
import { primary, secondary } from './Column.data';

const meta = {
  title: 'Components/CTA/3ColumnsCTA/Column',
  component: Column,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Use the `Column` component to display a column within a three-column layout. This component supports an image, a title, and a subtitle. Each column can be individually configured with content, making it versatile for various use cases.',
      },
    },
  },
  argTypes: {
    position: {
      control: 'radio',
      options: ['left', 'center', 'right'],
      description: 'Position of the column',
      table: {
        type: { summary: 'left | center | right' },
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
    ...primary.columns[0],
  },
};

export const Center: Story = {
  args: {
    ...primary.columns[1],
  },
};

export const Right: Story = {
  args: {
    ...primary.columns[2],
  },
};

export const LeftBold: Story = {
  args: {
    ...secondary.columns[0],
  },
};

export const CenterBold: Story = {
  args: {
    ...secondary.columns[1],
  },
};

export const RightBold: Story = {
  args: {
    ...secondary.columns[2],
  },
};
