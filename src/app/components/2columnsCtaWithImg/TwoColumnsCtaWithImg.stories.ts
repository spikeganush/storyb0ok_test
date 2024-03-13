import type { Meta, StoryObj } from '@storybook/react';
import { processColors } from '../../utils/helper';
import { COLOURS } from '../../utils/constants';
import TwoColumnsCtaWithImg from './TwoColumnsCtaWithImg';
import { primary, primaryWithExample } from './TwoColumnsCtaWithImg.data';

const colorOptions = processColors(COLOURS);

const textPresetColors = colorOptions.map((color) => `text-${color.color}`);

const meta: Meta<typeof TwoColumnsCtaWithImg> = {
  title: 'Components/CTA/2columnsCtaWithImg',

  component: TwoColumnsCtaWithImg,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    titleColor: {
      control: 'select',
      options: ['original', ...textPresetColors],
    },
    descriptionColor: {
      control: 'select',
      options: ['original', ...textPresetColors],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TwoColumnsCtaWithImg>;

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
