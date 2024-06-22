import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { memo } from "react";

type Props = {
  imageSrc: string;
  title: string;
  description: string;
};

export const ScreenFeature = memo(({ imageSrc, title, description }: Props) => {
  return (
    <Card maxW={500}>
      <CardBody>
        <Image src={imageSrc} alt={title} rounded={16} shadow="lg" />
        <Heading mt={8} size="md">
          {title}
        </Heading>
        <Text mt={6} as="p" color="gray.600">
          {description}
        </Text>
      </CardBody>
    </Card>
  );
});
