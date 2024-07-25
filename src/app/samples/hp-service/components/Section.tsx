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

const PCView = memo(({ icon, title, description, flip }: Props) => (
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
));

const SPView = memo(({ icon, title, description }: Omit<Props, "flip">) => (
  <Flex gap={2} flexDir="column">
    <Box>
      <AspectRatio ratio={1}>
        <Card bg="primary.50">
          <CardBody display="flex" justifyContent="center">
            <Image src={icon} alt="hero" w="full" />
          </CardBody>
        </Card>
      </AspectRatio>
    </Box>
    <Flex flexDir="column" gap={4} whiteSpace="pre-wrap" p={4}>
      <Heading size="lg">{title}</Heading>
      <Text size="sm">{description}</Text>
    </Flex>
  </Flex>
));

export default memo((props: Props) => {
  return (
    <>
      <Box display={{ base: "none", md: "block" }}>
        <PCView {...props} />
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <SPView {...props} />
      </Box>
    </>
  );
});
