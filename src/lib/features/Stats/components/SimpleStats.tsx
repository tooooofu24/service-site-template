import { Card, CardBody, Heading, Text } from "@chakra-ui/react";
import { memo } from "react";

type Props = {
  title: string;
  description: string;
};

export const SimpleStats = memo(({ title, description }: Props) => {
  return (
    <Card w="full">
      <CardBody
        px={0}
        textAlign="center"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading>{title}</Heading>
        <Text size="sm" color="gray.600" fontWeight="bold">
          {description}
        </Text>
      </CardBody>
    </Card>
  );
});
