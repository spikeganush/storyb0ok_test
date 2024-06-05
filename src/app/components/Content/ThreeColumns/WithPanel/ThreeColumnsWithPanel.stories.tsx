import type { Meta, StoryObj } from '@storybook/react';
import ThreeColumnsWithPanel from './ThreeColumnsWithPanel';
import { longPanelText, primaryDataStats, primaryDataText } from './ThreeColumnsWithPanel.data';

const meta: Meta<typeof ThreeColumnsWithPanel> = {
  title: 'Components/Content/3-Columns/WithPanel',

  component: ThreeColumnsWithPanel,
  parameters: {
    layout: 'fullscreen',
    deepControls: { enabled: true },
  },
  argTypes: {},
  tags: ['autodocs'],
} satisfies Meta<typeof ThreeColumnsWithPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Stats2ColumnsCards: Story = {
  args: { ...primaryDataStats } as never,
};

export const Text2ColumnsCards: Story = {
  args: { ...primaryDataText } as never,
};

export const LongPanelText: Story = {
  args: { ...longPanelText } as never,
};
