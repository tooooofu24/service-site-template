import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { memo } from "react";

type Props = {
  icon: string;
  title: string;
  description: string;
};

export default memo(({ icon, title, description }: Props) => {
  return (
    <Card bg="white" variant="outline" maxW={400} flex={1}>
      <CardBody>
        <Image src={icon} alt="hero" width="80%" mx="auto" />
        <Heading fontSize="2xl" textAlign="center" my={6}>
          {title}
        </Heading>
        <Text as="p" color="gray.600">
          {description}
        </Text>
      </CardBody>
    </Card>
  );
});
