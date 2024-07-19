import { Box, Container } from "@chakra-ui/react";
import { Noto_Sans } from "next/font/google";

import Concept from "~/app/samples/hp-service/components/Concept";
import FeatureGroup from "~/app/samples/hp-service/components/FeatureGroup";
import Header from "~/app/samples/hp-service/components/Header";
import Hero from "~/app/samples/hp-service/components/Hero";
import SectionGroup from "~/app/samples/hp-service/components/SectionGroup";
import Wave from "~/app/samples/hp-service/components/Wave";

const font = Noto_Sans({
  subsets: ["latin"],
});

export default () => {
  return (
    <Box as="main" className={font.className}>
      <Box
        position="fixed"
        zIndex="sticky"
        w="full"
        top={5}
        display="flex"
        justifyContent="center"
      >
        <Header />
      </Box>
      <Container pt={32} maxW="container.xl">
        <Hero />
      </Container>
      <Wave />
      <Box bg="primary.100">
        <Container maxW="container.xl">
          <Concept />
        </Container>
      </Box>
      <Wave flip />
      <Container maxW="container.xl">
        <FeatureGroup />
      </Container>
      <Box pt={24} />
      <SectionGroup />
    </Box>
  );
};
