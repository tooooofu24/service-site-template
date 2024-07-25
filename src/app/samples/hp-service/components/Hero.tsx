import type { TextProps } from "@chakra-ui/react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { memo } from "react";

import hero from "~/app/samples/hp-service/components/assets/hero.svg";

const DecoratedText = memo((props: TextProps) => (
  <Text
    as="span"
    position="relative"
    _after={{
      content: "''",
      width: "full",
      height: "20%",
      position: "absolute",
      bottom: 1,
      left: 0,
      bg: "primary.300",
      zIndex: -1,
    }}
    {...props}
  />
));

const HeroImage = memo(() => <Image src={hero.src} alt="hero" width="full" />);

const PCView = memo(() => (
  <Flex alignItems="center" justifyContent="center" px={4}>
    <Flex flex={1} justifyContent="end" alignItems="center">
      <Heading fontSize="4xl" w="auto">
        <DecoratedText>誰でも</DecoratedText>
        <br />
        <DecoratedText>カンタンに</DecoratedText>
        <br />
        <Text as="span">サイト作成！</Text>
        <br />
        <Button rounded="full" size="lg" mt={8}>
          申し込む
        </Button>
      </Heading>
    </Flex>
    <Flex flex={2} justifyContent="center" alignItems="center">
      <HeroImage />
    </Flex>
  </Flex>
));

const SPView = memo(() => (
  <Flex flexDir="column">
    <Heading fontSize="3xl" w="auto" textAlign="center">
      <DecoratedText>誰でもカンタンに</DecoratedText>
      <br />
      <Text as="span">サイト作成！</Text>
    </Heading>
    <Box position="relative">
      <HeroImage />
      <Button rounded="full" size="lg" position="absolute" bottom={3} right={3}>
        申し込む
      </Button>
    </Box>
  </Flex>
));

export default memo(() => {
  return (
    <>
      <Box display={{ base: "none", md: "block" }}>
        <PCView />
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <SPView />
      </Box>
    </>
  );
});
