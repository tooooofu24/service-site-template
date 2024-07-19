"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "~/chakra/theme";

const myTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: theme.colors.teal,
  },
};

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={myTheme}>{children}</ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
