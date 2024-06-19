import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ContentPanel from './ContentPanel';
import { PrimaryData } from './ContentPanel.data';
import { Canvas, Controls, Title } from '@storybook/blocks';
import ContentPanelDescription from './ContentPanelDescription';

const meta = {
  title: 'Components/ContentPanel',
  component: ContentPanel,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Content Panel</Title>
          <ContentPanelDescription />
          <Canvas withToolbar />
          <Controls />
        </>
      ),
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof ContentPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { ...PrimaryData },
};
