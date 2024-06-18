import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';
import { PrimaryData } from './Footer.data';

const meta = {
  title: 'Components/Footer',
  component: Footer,

  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { ...PrimaryData },
};
