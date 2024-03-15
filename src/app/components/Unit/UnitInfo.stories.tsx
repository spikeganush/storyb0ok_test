import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import UnitInfo from './UnitInfo';
import { primaryData } from './UnitInfo.data';
const meta: Meta<typeof UnitInfo> = {
  title: 'Components/Handbook/Unit/UnitInfo',
  component: UnitInfo,
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: 'children',
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
    ...primaryData,
  },
};
