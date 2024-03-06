import type { Meta, StoryObj } from '@storybook/react';
import ColumnsCta from './ColumnsCta';
import { ColumnProps } from './type';
import { primary, secondary } from './Column.data';

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
    topSeparator: primary.topSeparator,
    bottomSeparator: primary.bottomSeparator,
    title: primary.title,
    columns: primary.columns as ColumnProps[],
    cta: primary.cta,
  },
};

export const Secondary: Story = {
  args: {
    topSeparator: secondary.topSeparator,
    bottomSeparator: secondary.bottomSeparator,
    title: secondary.title,
    columns: secondary.columns as ColumnProps[],
  },
};
