import { Card, CardBody, Flex, Image, Link, Text } from "@chakra-ui/react";
import { memo } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

import logo from "~/lib/features/Footer/components/SimpleFooter/assets/logo.svg";

export const SimpleFooter = memo(() => {
  return (
    <Card>
      <CardBody>
        <Flex justifyContent="space-between" alignItems="center" w="full">
          <Flex gap={6} fontSize="2xl">
            <Link>
              <FaTwitter />
            </Link>
            <Link>
              <FaFacebook />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
          </Flex>
          <Flex flexDir="column" gap={2} alignItems="end">
            <Image src={logo.src} alt="logo" height={10} />
            <Text fontSize="sm" color="gray.600">
              © Logo Company All Rights Reserved.
            </Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
});
