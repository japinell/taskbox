import type { Preview } from "@storybook/react";
import "../src/index.css"; // Import your global CSS file

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
