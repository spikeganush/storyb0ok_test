import type { Meta, StoryObj } from '@storybook/react';
import Accordions from './Accordions';
import React from 'react';
import { primaryData } from './Accordions.data';

const meta: Meta<typeof Accordions> = {
  title: 'Components/Accordions/Handbook',
  component: Accordions,
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: 'children',
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
    ...primaryData,
  },
};
