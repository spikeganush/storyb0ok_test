import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Card from './Card';
import { primary, primaryWithContent } from './Card.data';

const meta: Meta<typeof Card> = {
  title: 'Components/Cards/2-3-4-up/Card',
  component: Card,
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
    ...primary,
  },
};

export const PrimaryWithContent: Story = {
  args: {
    ...primaryWithContent,
  },
};
