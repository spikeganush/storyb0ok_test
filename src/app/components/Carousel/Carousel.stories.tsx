import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Carousel from './Carousel';
import {
  primaryData,
  primaryDataWithContent,
  primaryDataLikeStudentPortal,
  primaryDataLikeStaff,
} from './Carousel.data';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="p-5 @container">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { ...primaryData },
};

export const WithContent: Story = {
  args: { ...primaryDataWithContent },
};

export const LikeStudentPortal: Story = {
  args: { ...primaryDataLikeStudentPortal },
};

export const LikeStaff: Story = {
  args: { ...primaryDataLikeStaff },
};
