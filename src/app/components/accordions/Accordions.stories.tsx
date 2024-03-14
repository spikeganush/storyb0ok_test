import type { Meta, StoryObj } from '@storybook/react';
import Accordions from './Accordions';
import React from 'react';
import { COLOURS } from '../../utils/constants';
import { getTWNameWithPrefix } from '../../utils/helper';
import { title } from 'process';

const meta: Meta<typeof Accordions> = {
  title: 'Components/Accordions/Accordions/accordions',
  component: Accordions,
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: 'children',
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

const primaryData = {
  title: 'Schedule offerings',
  accordion: [
    { title: 'Part A', subtitle: 'Arts Majors', children: 'Content' },
    { title: 'Part B', subtitle: 'Science Majors', children: 'Content' },
  ],
};
export const Primary: Story = {
  args: {
    ...primaryData,
  },
};
