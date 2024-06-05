import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import OneColumnWithMedia from './OneColumnWithMedia';
import { leftExampleData } from './OneColumnWithMedia.data';

const meta: Meta<typeof OneColumnWithMedia> = {
  title: 'Components/Content/1-Column/Half/with-media',
  component: OneColumnWithMedia,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
  args: {},
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

export const LeftExample: Story = {
  args: { ...leftExampleData },
};
