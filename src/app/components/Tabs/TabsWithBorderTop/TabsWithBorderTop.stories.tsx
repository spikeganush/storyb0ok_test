import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TabsWithBorderTop from './TabsWithBorderTop';
// import { primary } from './TabsWithBg.data';

const meta: Meta<typeof TabsWithBorderTop> = {
  title: 'Components/Tabs/TabsWithBorderTop',
  component: TabsWithBorderTop,
  parameters: {
    layout: 'fullscreen',
    controls: {
      //   exclude: 'children',
    },
    deepControls: {
      enabled: true,
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="p-5">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
