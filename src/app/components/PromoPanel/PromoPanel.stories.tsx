import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import PromoPanel from './PromoPanel';

const meta: Meta<typeof PromoPanel> = {
  title: 'Components/PromoPanel',
  component: PromoPanel,
  parameters: {
    layout: 'fullscreen',
    controls: {
      //   exclude: 'children',
    },
    deepControls: {
      enabled: true,
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
    text: 'This is a promo panel',
    cta_text: 'Learn more',
    cta_url: 'https://www.acu.edu.au/',
    bg_color: 'red',
    width: 'full',
  },
};
