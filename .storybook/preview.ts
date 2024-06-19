import type { Preview } from '@storybook/react';
import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Components',
          ['Header', 'CTA', 'Content', '2columnsWith3ColumnsRight', 'Accordions', 'Buttons'],
          'Design System',
        ],
      },
    },
  },
};

export default preview;
