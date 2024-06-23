import {
  AspectRatio,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { memo } from "react";

import image from "~/lib/features/CTA/components/ImageCTA/assets/image.webp";

export const ImageCTA = memo(() => {
  return (
    <AspectRatio ratio={16 / 9}>
      <Card
        bgImage={`url(${image.src})`}
        bgSize="cover"
        bgPos="center"
        w="full"
        h="full"
      >
        <CardBody w="full" h="full">
          <Flex flexDir="column" justifyContent="space-between" h="full">
            <Heading size="3xl" textAlign="center" color="white">
              Ready to
              <br />
              start giving?
            </Heading>
            <Flex justifyContent="center">
              <Button size="lg" rounded="full" bg="white" colorScheme="gray">
                Get Started
              </Button>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </AspectRatio>
  );
});
