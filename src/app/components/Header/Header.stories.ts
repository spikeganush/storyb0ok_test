import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const links = [
  {
    title: 'Welcome message',
    href: '/welcome-message',
  },
  {
    title: 'Our vision',
    href: '/our-vision',
  },
  {
    title: 'Our foundations',
    href: '/our-foundations',
  },
  {
    title: 'Our focus',
    href: '/our-focus',
  },
  {
    title: 'Our impact',
    href: 'https://staff.acu.edu.au/Impact-Vision-2033',
    targetOut: true,
  },
];

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    links,
  },
};
