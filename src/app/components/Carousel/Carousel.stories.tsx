import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Carousel from './Carousel';
import { title } from 'process';

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

const primaryData = {
  title: 'Carousel Title',
  tagsAll: true,
  cards: [
    {
      title: 'Card 1',
      content: 'This is the first card',
      date: '7 March',
      imgUrl: 'https://via.placeholder.com/262x160',
      tag: 'News',
      url: '#',
    },
    {
      title: 'Card 2',
      content: 'This is the second card',
      date: '8 March',
      imgUrl: 'https://via.placeholder.com/262x160',
      tag: 'News',
      url: '#',
    },
    {
      title: 'Card 3',
      content: 'This is the third card',
      date: '9 March',
      imgUrl: 'https://via.placeholder.com/262x160',
      tag: 'News',
      url: '#',
    },
    {
      title: 'Card 4',
      content: 'This is the fourth card',
      date: '10 March',
      imgUrl: 'https://via.placeholder.com/262x160',
      tag: 'Event',
      url: '#',
    },
    {
      title: 'Card 5',
      content: 'This is the fifth card',
      date: '11 March',
      imgUrl: 'https://via.placeholder.com/262x160',
      tag: 'Event',
      url: '#',
    },
    {
      title: 'Card 6',
      content: 'This is the sixth card',
      date: '12 March',
      imgUrl: 'https://via.placeholder.com/262x160',
      tag: 'Event',
      url: '#',
    },
    {
      title: 'Card 7',
      content: 'This is the seventh card',
      date: '13 March',
      imgUrl: 'https://via.placeholder.com/262x160',
      tag: 'Result',
      url: '#',
    },
    {
      title: 'Card 8',
      content: 'This is the eighth card',
      date: '14 March',
      imgUrl: 'https://via.placeholder.com/262x160',
      tag: 'Result',
      url: '#',
    },
    {
      title: 'Card 9',
      content: 'This is the ninth card',
      date: '15 March',
      imgUrl: 'https://via.placeholder.com/262x160',
      tag: 'Result',
      url: '#',
    },
    {
      title: 'Card 10',
      content: 'This is the tenth card',
      date: '16 March',
      imgUrl: 'https://via.placeholder.com/262x160',
      tag: 'Result',
      url: '#',
    },
  ],
};
export const Primary: Story = {
  args: { ...primaryData },
};
