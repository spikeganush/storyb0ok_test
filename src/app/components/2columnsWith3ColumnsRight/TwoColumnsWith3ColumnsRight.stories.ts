import type { Meta, StoryObj } from '@storybook/react';
import TwoClWith3ClRight from './TwoClWith3ClRight';
import { primary, primaryWithExample } from './TwoClWith3ClRight.data';
import { processColors } from '../../utils/helper';
import { COLOURS } from '../../utils/constants';

const colorOptions = processColors(COLOURS);

const presetColors = colorOptions.map((color) => color.color);

const meta: Meta<typeof TwoClWith3ClRight> = {
  title: 'Components/2columnsWith3ColumnsRight',

  component: TwoClWith3ClRight,
  parameters: {
    layout: 'fullscreen',
    deepControls: { enabled: true },
  },
  argTypes: {
    //@ts-ignore - TS is not happy with this, but it works
    'left.titleColor': {
      control: 'select',
      options: presetColors,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TwoClWith3ClRight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ...primary,
  },
};

export const PrimaryWithExample: Story = {
  args: {
    ...primaryWithExample,
  },
};
