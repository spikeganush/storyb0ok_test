import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';
import React from 'react';
import { COLOURS } from '../../utils/constants';
import { getTWNameWithPrefix } from '../../utils/helper';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordions/Accordions/accordion',
  component: Accordion,
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: 'children',
    },
  },
  argTypes: {
    subtitleColor: {
      control: 'select',
      options: [
        getTWNameWithPrefix('text', COLOURS['acu-black'][80]),
        getTWNameWithPrefix('text', COLOURS['acu-charcoal'][100]),
      ],
      defaultValue: getTWNameWithPrefix('text', COLOURS['acu-black'][80]),
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
    title: 'Part A',
    subtitle: 'Arts Majors',
    children: 'Content',
  },
};
