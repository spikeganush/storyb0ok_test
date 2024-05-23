import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import OneColumnHalf from './OneColumnHalf';

const meta: Meta<typeof OneColumnHalf> = {
  title: 'Components/Content/1-Column/Half/half-width',
  component: OneColumnHalf,
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

export const Primary: Story = {
  args: {
    title: 'Melbourne',
    paragraphs: [
      'Our St Patrick’s Campus is located in the heart of cosmopolitan Melbourne. The cafes, shops and nightlife of Brunswick and Smith Streets are nearby, as are some of the city’s finest parks.',
      'The campus itself is a mix of historic and modern buildings with plenty of room to study, relax and connect with other students. Exciting development projects are ongoing to enhance our campus for staff and students.',
    ],
    link: {
      url: 'https://www.acu.edu.au/study-at-acu/find-a-course/course-search-result?redirect=%26Campus%3dMelbourne',
      text: 'Search Melbourne courses',
    },
  },
};
