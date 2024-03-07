import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';
import { accordionsWithIcon, accordionsWithoutIcon } from './Accordion.data';

const meta = {
  title: 'Components/Accordions/accordion',
  component: Accordion,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithIcon: Story = {
  args: {
    accordion: accordionsWithIcon[0],
  },
};

export const WithoutIcon: Story = {
  args: {
    accordion: accordionsWithoutIcon[0],
  },
};
