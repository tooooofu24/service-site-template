import {
  Card,
  CardBody,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { memo } from "react";

type Props = {
  icon: string;
  title: string;
  description: string;
};

export default memo(({ icon, title, description }: Props) => {
  return (
    <GridItem>
      <Card bg="white" variant="outline">
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
    </GridItem>
  );
});
