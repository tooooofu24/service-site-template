import { Button, Card, CardBody, Flex, Image, Link } from "@chakra-ui/react";
import { memo } from "react";

import logo from "~/lib/features/Header/assets/logo.svg";

/**
 * @link https://critter.pet/
 */
export const RoundedHeader = memo(() => {
  return (
    <Card rounded="full" variant="outline">
      <CardBody>
        <Flex
          justify="space-between"
          align="center"
          height={12}
          display={{ base: "none", lg: "flex" }}
        >
          <Flex justify="start" align="center" gap={8}>
            <Link>Features</Link>
            <Link>Pricing</Link>
            <Link>Contact us</Link>
          </Flex>
          <Image src={logo.src} alt="logo" height={10} />
          <Flex justify="end" align="center" gap={8}>
            <Link>Request demo</Link>
            <Button rounded="full">Start for free</Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
});
