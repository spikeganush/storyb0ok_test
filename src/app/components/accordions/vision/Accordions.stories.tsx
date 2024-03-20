import type { Meta, StoryObj } from '@storybook/react';
import Accordions from './Accordions';
import { accordionsWithIcon, accordionsWithoutIcon } from './Accordion.data';
import React from 'react';

const meta = {
  title: 'Components/Accordions/Vision2033/accordions',
  component: Accordions,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="p-5">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Accordions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithIcon: Story = {
  args: {
    accordions: accordionsWithIcon,
  },
};

export const WithoutIcon: Story = {
  args: {
    accordions: accordionsWithoutIcon,
  },
};
