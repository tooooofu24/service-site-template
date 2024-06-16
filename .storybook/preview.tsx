import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import type { Preview } from "@storybook/react";
// @ts-expect-error
import theme from "~/chakra/theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    ),
  ],
};

export default preview;
