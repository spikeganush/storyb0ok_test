import type { Meta, StoryObj } from '@storybook/react';
import Accordions from './Accordions';
import { accordionsWithIcon, accordionsWithoutIcon } from './Accordion.data';

const meta = {
  title: 'Example/Accordions/accordions',
  component: Accordions,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
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
