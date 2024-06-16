import { Button, Card, CardBody, Flex, Image, Link } from "@chakra-ui/react";
import { memo } from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";

import logo from "~/lib/features/Header/assets/logo.svg";

/**
 * @link https://www.bauplanlabs.com/
 */
export const SimpleHeader = memo(() => {
  return (
    <Card bg="white">
      <CardBody>
        <Flex justify="space-between" align="center" height={12}>
          <Image src={logo.src} alt="logo" height={32} width={32} />
          <Flex
            justify="end"
            align="center"
            gap={8}
            display={{ base: "none", lg: "flex" }}
          >
            <Link>Blog</Link>
            <Link>Docs</Link>
            <Link fontSize={24}>
              <FaTwitter />
            </Link>
            <Link fontSize={24}>
              <FaLinkedin />
            </Link>
            <Button rounded="full">Join private alpha</Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
});
