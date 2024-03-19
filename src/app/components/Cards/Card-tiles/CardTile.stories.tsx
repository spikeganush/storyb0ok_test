import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import CardTile from './CardTile';

const meta: Meta<typeof CardTile> = {
  title: 'Components/Cards/Tile/Card',
  component: CardTile,
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
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Card Tile',
    url: 'https://www.google.com',
  },
};
