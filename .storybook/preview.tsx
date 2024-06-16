import React from "react";
import {
  ChakraProvider,
  baseTheme,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import type { Preview } from "@storybook/react";

const theme = extendTheme(
  {
    colors: {
      primary: baseTheme.colors.blue,
    },
  },
  withDefaultColorScheme({
    colorScheme: "primary",
  })
);

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
