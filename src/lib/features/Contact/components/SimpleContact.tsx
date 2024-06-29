import type { PropsOf } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  FormControl,
  Heading,
  Input as ChakraInput,
  SimpleGrid,
  Textarea as ChakraTextarea,
  GridItem,
  Flex,
  Button,
} from "@chakra-ui/react";
import { memo } from "react";

type ChakraInputProps = PropsOf<typeof ChakraInput>;
type ChakraTextareaProps = PropsOf<typeof ChakraTextarea>;

type CommonProps = Pick<
  ChakraInputProps,
  keyof ChakraTextareaProps & keyof ChakraInputProps
>;

const defaultProps = {
  p: 8,
  bg: "white",
  size: "lg",
  rounded: "3xl",
} as CommonProps;

const Input = (props: PropsOf<typeof ChakraInput>) => (
  <ChakraInput {...defaultProps} {...props} />
);

const Textarea = (props: PropsOf<typeof ChakraTextarea>) => (
  <ChakraTextarea {...defaultProps} {...props} />
);

export const SimpleContact = memo(() => {
  return (
    <Card>
      <CardBody maxW="900" w="full" mx="auto">
        <Heading textAlign="center" fontWeight="normal" mb={12}>
          CONTACT US
        </Heading>
        <SimpleGrid columns={2} rowGap={6} columnGap={6}>
          <FormControl>
            <Input placeholder="Your name" />
          </FormControl>
          <FormControl>
            <Input placeholder="Your title" />
          </FormControl>
          <FormControl>
            <Input placeholder="Your email" />
          </FormControl>
          <FormControl>
            <Input placeholder="Your telephone" />
          </FormControl>
          <GridItem colSpan={2}>
            <FormControl>
              <Textarea placeholder="Your message" rows={6} />
            </FormControl>
          </GridItem>
        </SimpleGrid>
        <Flex justify="center" mt={8}>
          <Button rounded="full" size="lg">
            Send Message
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
});
