import { Button, Card, CardBody, Flex, Image } from "@chakra-ui/react";
import { memo } from "react";

import logo from "~/lib/features/Header/assets/logo.svg";

/**
 * @link https://stellaseed.jp/
 */
export const SkeletonHeader = memo(() => {
  return (
    <Card bg="none">
      <CardBody py={0}>
        <Flex justify="space-between" align="center">
          <Image src={logo.src} alt="logo" height={10} />
          <Card bg="white" rounded="full">
            <CardBody>
              <Flex
                align="center"
                display={{ base: "none", lg: "flex" }}
                gap={6}
              >
                <Button variant="link">BRANDS</Button>
                <Button variant="link">COMPANY</Button>
                <Button variant="link">RECRUIT</Button>
                <Button variant="link">NEWS</Button>
                <Button variant="link">CONTACT</Button>
                <Button variant="link">ONLINE STORE</Button>
              </Flex>
            </CardBody>
          </Card>
        </Flex>
      </CardBody>
    </Card>
  );
});
