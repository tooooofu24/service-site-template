import { Box, Container } from "@chakra-ui/react";
import { Noto_Sans } from "next/font/google";

import Concept from "~/app/samples/hp-service/components/Concept";
import Contact from "~/app/samples/hp-service/components/Contact";
import ContactTitle from "~/app/samples/hp-service/components/ContactTitle";
import FeatureGroup from "~/app/samples/hp-service/components/FeatureGroup";
import Footer from "~/app/samples/hp-service/components/Footer";
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
      <Header />
      <Container py={32} pb={16} maxW="container.xl">
        <Hero />
      </Container>
      <Wave />
      <Box bg="primary.100" px={4}>
        <Container
          maxW="container.xl"
          py={{
            base: 16,
            md: 24,
          }}
        >
          <Concept />
        </Container>
        <Container
          maxW="container.xl"
          pb={{
            base: 16,
            md: 24,
          }}
        >
          <FeatureGroup />
        </Container>
      </Box>
      <Wave flip />
      <Box
        py={{
          base: 16,
          md: 24,
        }}
      >
        <SectionGroup />
      </Box>
      <ContactTitle />
      <Box
        py={{
          base: 12,
          md: 24,
        }}
        px={8}
      >
        <Contact />
      </Box>
      <Box bg="gray.100">
        <Footer />
      </Box>
    </Box>
  );
};
