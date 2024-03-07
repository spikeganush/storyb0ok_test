import type { Meta, StoryObj } from '@storybook/react';
import AccordionsWithLeftColumn from './AccordionsWithLeftColumn';
import {
  LeftPartWithIcon,
  LeftPartWithoutIcon,
  accordionsWithIcon,
  accordionsWithoutIcon,
} from './Accordion.data';

const meta = {
  title: 'Components/Accordions/accordions-with-left-column',
  component: AccordionsWithLeftColumn,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AccordionsWithLeftColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithIcon: Story = {
  args: {
    leftPart: LeftPartWithIcon,
    accordions: accordionsWithIcon,
  },
};

export const WithoutIcon: Story = {
  args: {
    leftPart: LeftPartWithoutIcon,
    accordions: accordionsWithoutIcon,
  },
};
