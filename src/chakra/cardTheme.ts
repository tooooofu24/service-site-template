import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {},
  header: {},
  body: {},
  footer: {},
});

const sizes = {
  lg: definePartsStyle({
    container: {
      rounded: 32,
    },
    header: {},
    body: {
      p: 12,
      bg: "primary.100",
    },
    footer: {},
  }),
};

const defaultProps = {
  size: "lg",
  variant: "filled",
} as const;

const cardTheme = defineMultiStyleConfig({ baseStyle, sizes, defaultProps });

export default cardTheme;
