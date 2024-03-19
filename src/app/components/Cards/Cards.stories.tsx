import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Cards from './Cards';
import { primary, primaryCardsWithContent } from './Card.data';
import { TCardProps } from './Card';

const meta: Meta<typeof Cards> = {
  title: 'Components/Cards/Cards',
  component: Cards,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    numberOfCards: {
      control: {
        type: 'range',
        min: 1,
        max: 4,
        step: 1,
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
  },
};
