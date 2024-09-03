import type { Meta, StoryObj } from '@storybook/react';

import Schedule from './Schedule';

const meta: Meta<typeof Schedule> = {
  title: 'Components/Schedule',
  component: Schedule,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
