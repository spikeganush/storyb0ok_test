import type { Meta, StoryObj } from '@storybook/react';
import ColumnsCta from './ColumnsCta';
import { ColumnProps } from './type';
import { primary, primaryLongTextNoCtaNoTitle, secondary } from './Column.data';

const meta: Meta<typeof ColumnsCta> = {
  title: 'Example/3ColumnsCTA/ColumnsCta',

  component: ColumnsCta,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Use the `ColumnsCta` component to display a call to action within a three-column layout. This component supports top and bottom separators for visual distinction, a customizable title, and a call to action. Each column can be individually configured with content, making it versatile for various use cases.',
      },
    },
  },
  argTypes: {
    topSeparator: {
      control: 'boolean',
      description:
        'Displays a separator line at the top of the component. Useful for visually distinguishing this component from content above it.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    bottomSeparator: {
      control: 'boolean',
      description:
        'Displays a separator line at the bottom of the component. Helps in setting a clear boundary with subsequent content.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    title: {
      control: 'object',
      description:
        'The title object for the Columns CTA component. It can include text, styles, and other relevant properties to render a title.',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    },
    columns: {
      control: 'object',
      description:
        'An array of column objects. Each column can contain its own set of properties like images, texts, and links to render individual columns within the CTA component.',
      table: {
        type: { summary: 'ColumnProps[]' },
        defaultValue: { summary: '[]' },
      },
    },
    cta: {
      control: 'object',
      description:
        'An object representing the call to action. It can include properties for the CTA text, link, and styling options to guide users towards a primary action.',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ColumnsCta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    topSeparator: primary.topSeparator,
    bottomSeparator: primary.bottomSeparator,
    title: primary.title,
    columns: primary.columns as ColumnProps[],
    cta: primary.cta,
  },
};

export const Secondary: Story = {
  args: {
    topSeparator: secondary.topSeparator,
    bottomSeparator: secondary.bottomSeparator,
    title: secondary.title,
    columns: secondary.columns as ColumnProps[],
  },
};

export const PrimaryLongTextNoCtaNoTitle: Story = {
  args: {
    topSeparator: primaryLongTextNoCtaNoTitle.topSeparator,
    bottomSeparator: primaryLongTextNoCtaNoTitle.bottomSeparator,
    columns: primaryLongTextNoCtaNoTitle.columns as ColumnProps[],
  },
};
