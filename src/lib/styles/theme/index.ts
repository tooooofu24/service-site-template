import { extendTheme } from "@chakra-ui/react";

// eslint-disable-next-line
import { colors } from "./colors";
// eslint-disable-next-line
import { components } from "./components";
// eslint-disable-next-line
import { config } from "./config";
// eslint-disable-next-line
import { fonts } from "./fonts";

const customTheme = extendTheme({
  fonts,
  colors,
  config,
  components,
});

export default customTheme;
