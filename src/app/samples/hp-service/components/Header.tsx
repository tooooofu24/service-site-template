import { Button, Card, CardBody, Flex, Image } from "@chakra-ui/react";
import { memo } from "react";
import { FaPaperPlane } from "react-icons/fa6";

import logo from "~/app/samples/hp-service/components/assets/logo.svg";

export default memo(() => {
  return (
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
  );
});
