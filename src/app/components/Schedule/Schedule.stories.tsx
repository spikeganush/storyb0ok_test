import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Schedule from './Schedule';

const meta: Meta<typeof Schedule> = {
  title: 'Components/Schedule',
  component: Schedule,
  parameters: {
    layout: 'fullscreen',
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

export const Default: Story = {};
