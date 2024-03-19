import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Cards from './Cards';
import { primary, primaryCardsWithContent } from './Card.data';

const meta: Meta<typeof Cards> = {
  title: 'Components/Cards/Cards',
  component: Cards,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    numberOfCards: {
      options: [2, 3, 4],
      control: {
        type: 'select',
      },
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
  args: {
    cards: Array.from({ length: 4 }, () => ({ ...primary })),
    numberOfCards: 4,
    showImg: true,
  },
};

export const PrimaryWithContent: Story = {
  args: {
    cards: primaryCardsWithContent,
    numberOfCards: 4,
    showImg: true,
    mainTitle: 'Discover more',
    showMainTitle: true,
  },
};
