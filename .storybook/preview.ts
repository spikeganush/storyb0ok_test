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
          'Design System',
          'Components',
          ['Header', 'CTA', 'Content', '2columnsWith3ColumnsRight', 'Accordions', 'Buttons'],
        ],
      },
    },
  },
};

export default preview;
