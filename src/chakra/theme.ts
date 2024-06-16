import {
  baseTheme,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

import cardTheme from "~/chakra/cardTheme";

const theme = extendTheme(
  {
    colors: {
      primary: baseTheme.colors.blue,
    },
    components: {
      Card: cardTheme,
    },
  },
  withDefaultColorScheme({
    colorScheme: "primary",
  })
);

export default theme;
