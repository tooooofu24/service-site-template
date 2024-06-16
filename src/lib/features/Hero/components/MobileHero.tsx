import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { memo } from "react";
import { FaApple } from "react-icons/fa6";

import logo from "~/lib/features/Hero/assets/logo.svg";
import screenshot from "~/lib/features/Hero/assets/screenshot.png";

export const MobileHero = memo(() => {
  return (
    <Card height="450px" overflow="hidden">
      <CardBody>
        <Flex alignItems="start" gap={4} mx="auto" maxW="container.md">
          <Flex flexDir="column" alignItems="start" justifyContent="center">
            <Image src={logo.src} alt="logo" mb={8} height={8} />
            <Heading as="h1" size="3xl" mb={8}>
              Real-time
              <br />
              messaging.
            </Heading>
            <Text as="p" color="gray.600" mb={8}>
              Honk is the all-new way to chat with your friends in real time,
              with messages shown live as you type.
            </Text>
            <Button
              size="lg"
              rounded="full"
              bg="white"
              colorScheme="gray"
              leftIcon={<FaApple />}
            >
              Apple Store
            </Button>
          </Flex>
          <Image src={screenshot.src} alt="screenshot" width="300px" />
        </Flex>
      </CardBody>
    </Card>
  );
});
