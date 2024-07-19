import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { memo } from "react";

import hero from "~/app/samples/hp-service/components/assets/hero.svg";

export default memo(() => {
  return (
    <Flex alignItems="center" justifyContent="center" px={4}>
      <Flex flex={1} justifyContent="end" alignItems="center">
        <Heading fontSize="4xl" w="auto">
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
          >
            誰でも
          </Text>
          <br />
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
          >
            カンタンに
          </Text>
          <br />
          <Text as="span">サイト作成！</Text>
          <br />
          <Button rounded="full" size="lg" mt={8}>
            申し込む
          </Button>
        </Heading>
      </Flex>
      <Flex flex={2} justifyContent="center" alignItems="center">
        <Image src={hero.src} alt="hero" width="full" />
      </Flex>
    </Flex>
  );
});
