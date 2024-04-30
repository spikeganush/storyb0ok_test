import type { Meta, StoryObj } from '@storybook/react';
import ButtonCTA from './CTA';

const meta = {
  title: 'Components/Buttons/CTA',
  component: ButtonCTA,

  tags: ['autodocs'],
} satisfies Meta<typeof ButtonCTA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Arrow: Story = {
  args: {
    url: 'https://www.acu.edu.au/',
    text: 'Learn more',
    type: 'arrow',
  },
};

export const Button: Story = {
  args: {
    url: 'https://www.acu.edu.au/',
    text: 'Learn more',
    type: 'button',
  },
};
