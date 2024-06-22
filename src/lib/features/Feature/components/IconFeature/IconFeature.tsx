import type { PropsOf } from "@chakra-ui/react";
import { Card, CardBody, Flex, Heading, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { memo } from "react";

type CardProps = PropsOf<typeof Card>;

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
} & Pick<CardProps, "colorScheme">;

export const IconFeature = memo(
  ({ icon, title, description, colorScheme = "primary" }: Props) => {
    return (
      <Card maxW={400} bg={`${colorScheme}.100`} colorScheme={colorScheme}>
        <CardBody>
          <Flex
            justify="center"
            align="center"
            fontSize={140}
            height={140}
            color={`${colorScheme}.400`}
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
  }
);
