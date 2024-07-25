import { Box, Button, Card, CardBody, Flex, Image } from "@chakra-ui/react";
import { memo } from "react";
import { FaPaperPlane } from "react-icons/fa6";

import logo from "~/app/samples/hp-service/components/assets/logo.svg";

const PCView = memo(() => (
  <Box
    position="fixed"
    zIndex="sticky"
    w="full"
    top={5}
    display="flex"
    justifyContent="center"
  >
    <Card
      rounded="full"
      size="md"
      maxW="container.sm"
      backdropFilter="blur(20px)"
      bg="none"
      flex={1}
    >
      <CardBody>
        <Flex justify="space-between" align="center">
          <Image src={logo.src} alt="logo" height={10} />
          <Button rounded="full" size="lg" rightIcon={<FaPaperPlane />}>
            申し込む
          </Button>
        </Flex>
      </CardBody>
    </Card>
  </Box>
));

const SPView = memo(() => (
  <Box
    position="fixed"
    zIndex="sticky"
    w="full"
    top={1}
    display="flex"
    justifyContent="center"
    px={2}
  >
    <Card
      rounded="full"
      size="md"
      backdropFilter="blur(20px)"
      bg="none"
      flex={1}
    >
      <CardBody>
        <Flex justify="space-between" align="center">
          <Image src={logo.src} alt="logo" height={8} />
          <Button rounded="full" rightIcon={<FaPaperPlane />}>
            申し込む
          </Button>
        </Flex>
      </CardBody>
    </Card>
  </Box>
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
