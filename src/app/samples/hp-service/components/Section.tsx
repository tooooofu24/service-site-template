import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { memo } from "react";

type Props = {
  icon: string;
  title: string;
  description: string;
  flip?: boolean;
};

export default memo(({ icon, title, description, flip }: Props) => {
  return (
    <Flex gap={8} flexDir={flip ? "row-reverse" : "row"}>
      <Box p={4} flex={1}>
        <AspectRatio ratio={1}>
          <Card bg="primary.50">
            <CardBody display="flex" justifyContent="center">
              <Image src={icon} alt="hero" w="full" />
            </CardBody>
          </Card>
        </AspectRatio>
      </Box>
      <Flex
        flex={1}
        flexDir="column"
        justifyContent="center"
        p={4}
        gap={8}
        whiteSpace="pre-wrap"
      >
        <Heading>{title}</Heading>
        <Text>{description}</Text>
      </Flex>
    </Flex>
  );
});
