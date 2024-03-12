import type { Meta, StoryObj } from '@storybook/react';
import TwoClWith3ClRight from './TwoClWith3ClRight';
import { primary, primaryWithExample } from './TwoClWith3ClRight.data';

const meta: Meta<typeof TwoClWith3ClRight> = {
  title: 'Components/2columnsWith3ColumnsRight',

  component: TwoClWith3ClRight,
  parameters: {
    layout: 'fullscreen',
    // docs: {
    //   description: {
    //     component:
    //       'Use the `ColumnsCta` component to display a call to action within a three-column layout. This component supports top and bottom separators for visual distinction, a customizable title, and a call to action. Each column can be individually configured with content, making it versatile for various use cases.',
    //   },
    // },
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
