import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TabsWithBg from './TabsWithBg';
import { primary } from './TabsWithBg.data';

const meta: Meta<typeof TabsWithBg> = {
  title: 'Components/TabsWithBg',
  component: TabsWithBg,
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
  args: {
    ...primary,
  },
};
