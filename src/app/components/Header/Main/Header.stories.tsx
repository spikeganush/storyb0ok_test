import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import { PrimaryData } from './Header.data';
import { Canvas, Controls, Title } from '@storybook/blocks';
import HeaderDescription from './HeaderDescription';

const meta = {
  title: 'Components/Header/Main',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: () => (
        <>
          <Title />
          <HeaderDescription />
          <Canvas />
          <Controls />
        </>
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { ...PrimaryData },
};
