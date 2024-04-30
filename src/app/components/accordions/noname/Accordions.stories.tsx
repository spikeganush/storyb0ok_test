import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { primaryData } from './Accordions.data';
import Accordions from './Accordions';

const meta: Meta<typeof Accordions> = {
  title: 'Components/Accordions/NoName',
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
