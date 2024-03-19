import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';
import React from 'react';
import { COLOURS } from '../../../utils/constants';
import { getTWNameWithPrefix } from '../../../utils/helper';
import UnitInfo from '../../Unit/UnitInfo';
import { primaryData } from '../../Unit/UnitInfo.data';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordions/Handbook/accordion',
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
        getTWNameWithPrefix('text', COLOURS['acu-charcoal'][120]),
        getTWNameWithPrefix('text', COLOURS['acu-red'][100]),
      ],
      defaultValue: getTWNameWithPrefix('text', COLOURS['acu-black'][80]),
      description: `Default color: ${getTWNameWithPrefix('text', COLOURS['acu-black'][80])}`,
    },
    open: {
      control: 'boolean',
      defaultValue: false,
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
    children: <UnitInfo {...primaryData} />,
  },
};
