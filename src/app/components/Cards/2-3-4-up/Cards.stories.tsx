import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Cards from './Cards';
import { primary, primaryCardsWithContent } from './Card.data';

const meta: Meta<typeof Cards> = {
  title: 'Components/Cards/2-3-4-up',
  component: Cards,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    numberOfCards: {
      name: 'Number of cards',
      options: [2, 3, 4],
      control: {
        type: 'select',
      },
    },
    showImg: {
      name: 'Image visible',
    },
    mainTitle: {
      name: 'Main title',
    },
    showMainTitle: {
      name: 'Show main title',
    },
  },
  args: {
    showImg: true,
    numberOfCards: 4,
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
  },
};

export const PrimaryWithContent: Story = {
  args: {
    cards: primaryCardsWithContent,
    mainTitle: 'Discover more',
    showMainTitle: true,
  },
};
