import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Quicklinks from './Quicklinks';
import { primary } from './Quicklinks.data';

const meta: Meta<typeof Quicklinks> = {
  title: 'Components/Quicklinks',
  component: Quicklinks,
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
