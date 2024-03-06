import type { Meta, StoryObj } from '@storybook/react';
import ButtonCTA from './CTA';

const meta = {
  title: 'Example/Buttons/CTA',
  component: ButtonCTA,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonCTA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    url: 'https://www.acu.edu.au/',
    text: 'Learn more',
  },
};
