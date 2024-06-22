import { Card, CardBody, Flex, Heading, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { memo } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const IconFeature = memo(({ icon, title, description }: Props) => {
  return (
    <Card maxW={400}>
      <CardBody>
        <Flex
          justify="center"
          align="center"
          fontSize={140}
          height={140}
          color="primary.400"
          pb={8}
        >
          {icon}
        </Flex>
        <Flex
          justify="center"
          align="center"
          gap={4}
          flexDir="column"
          w="full"
          textAlign="center"
        >
          <Heading>{title}</Heading>
          <Text as="p" color="gray.600">
            {description}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
});
