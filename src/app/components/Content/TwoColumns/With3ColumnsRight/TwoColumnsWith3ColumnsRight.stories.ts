import type { Meta, StoryObj } from '@storybook/react';
import TwoClWith3ClRight from './TwoClWith3ClRight';
import { primary, primaryWithExample } from './TwoClWith3ClRight.data';
import { processColors } from '../../../../utils/helper';
import { COLOURS } from '../../../../utils/constants';

const colorOptions = processColors(COLOURS);

const textPresetColors = colorOptions.map((color) => `text-${color.colour}`);

const meta: Meta<typeof TwoClWith3ClRight> = {
  title: 'Components/Content/2-Columns/With3ColumnsRight',

  component: TwoClWith3ClRight,
  parameters: {
    layout: 'fullscreen',
    deepControls: { enabled: true },
  },
  argTypes: {
    //@ts-ignore - TS is not happy with this, but it works
    'left.titleColor': {
      control: 'select',
      options: ['original', ...textPresetColors],
      description: 'Color of the title',
    },
    //@ts-ignore - TS is not happy with this, but it works
    'left.subTitleColor': {
      control: 'select',
      options: ['original', ...textPresetColors],
    },
    //@ts-ignore - TS is not happy with this, but it works
    'left.contentColor': {
      control: 'select',
      options: [
        'original',
        'text-acu-black-80',
        'text-acu-black-120',
        'text-acu-charcoal-100',
        'text-acu-charcoal-120',
      ],
    },
    //@ts-ignore - TS is not happy with this, but it works
    'right.titleColor': {
      control: 'select',
      options: ['original', ...textPresetColors],
    },
    //@ts-ignore - TS is not happy with this, but it works
    'right.contentTitleColor': {
      control: 'select',
      options: ['original', ...textPresetColors],
    },
    //@ts-ignore - TS is not happy with this, but it works
    'right.contentColor': {
      control: 'select',
      options: [
        'original',
        'text-acu-black-80',
        'text-acu-black-120',
        'text-acu-charcoal-100',
        'text-acu-charcoal-120',
      ],
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
