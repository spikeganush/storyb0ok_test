import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import CardsTile from './CardsTile';
import { primaryData } from './CardsTile.data';

const meta: Meta<typeof CardsTile> = {
  title: 'Components/Cards/Tile',
  component: CardsTile,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    numberOfCards: {
      name: 'Number of Cards',
      description: 'Number of cards to display (present for Storybook demo)',
      control: {
        type: 'select',
      },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    },
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
  args: { ...primaryData },
};
