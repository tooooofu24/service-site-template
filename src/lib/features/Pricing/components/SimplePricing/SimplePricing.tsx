import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Tag,
  Text,
} from "@chakra-ui/react";
import { memo } from "react";
import { FaArrowRight, FaCircleCheck } from "react-icons/fa6";

type Props = {
  title: string;
  price: number;
  features: string[];
  isRecommended?: boolean;
};

export const SimplePricing = memo(
  ({ title, price, features, isRecommended }: Props) => {
    return (
      <Card
        maxW="400"
        variant="outline"
        bg={isRecommended ? "primary.500" : undefined}
        color={isRecommended ? "white" : "primary.500"}
        position="relative"
      >
        {isRecommended && (
          <Tag
            position="absolute"
            top={0}
            right={8}
            colorScheme="teal"
            size="lg"
            borderTopRadius={0}
          >
            Recommended
          </Tag>
        )}
        <CardBody>
          <Heading>{title}</Heading>
          <Text>Per License</Text>
          <Text
            mt={4}
            fontWeight="bold"
            fontSize="4xl"
            color={isRecommended ? "white" : "gray.800"}
          >
            ${price}
          </Text>
          <Button
            my={4}
            rounded="full"
            size="lg"
            w="full"
            variant="outline"
            rightIcon={<FaArrowRight />}
            bg="white"
          >
            {price === 0 ? "Start for Free" : "Get Started"}
          </Button>
          {features.map((feature) => (
            <Flex align="center" mt={4} gap={4} key={feature}>
              <Text
                color={isRecommended ? "teal.200" : undefined}
                fontSize="2xl"
              >
                <FaCircleCheck />
              </Text>
              <Text
                fontSize="xl"
                fontWeight="bold"
                color={isRecommended ? "white" : "gray.800"}
              >
                {feature}
              </Text>
            </Flex>
          ))}
        </CardBody>
      </Card>
    );
  }
);
