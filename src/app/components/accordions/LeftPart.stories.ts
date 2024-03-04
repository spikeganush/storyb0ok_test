import type { Meta, StoryObj } from '@storybook/react';
import LeftPart from './LeftPart';
import { title } from 'process';
import { LeftPartWithIcon, LeftPartWithoutIcon } from './Accordion.data';

// Example data for the Accordion

const meta = {
  title: 'Example/Accordions/Left-part',
  component: LeftPart,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LeftPart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithIcon: Story = {
  args: {
    title: LeftPartWithIcon.title,
    subtitle: LeftPartWithIcon.subtitle,
    img: LeftPartWithIcon.img,
  },
};

export const WithoutIcon: Story = {
  args: {
    title: LeftPartWithoutIcon.title,
    subtitle: LeftPartWithoutIcon.subtitle,
  },
};
