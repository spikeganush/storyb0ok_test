import type { Meta, StoryObj } from '@storybook/react';
import AskAcu from './AskAcu';
import { PrimaryData } from './AskAcu.data';

const meta = {
  title: 'Components/AskAcu',
  component: AskAcu,

  tags: ['autodocs'],
} satisfies Meta<typeof AskAcu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { ...PrimaryData },
};
