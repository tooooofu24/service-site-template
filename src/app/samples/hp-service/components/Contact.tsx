import type { FormLabelProps, InputProps } from "@chakra-ui/react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";
import { memo } from "react";
import { FaPaperPlane } from "react-icons/fa6";

const StyledLabel = (props: FormLabelProps) => (
  <FormLabel fontSize="sm" color="primary.500" fontWeight="bold" {...props} />
);

const StyledInput = (props: InputProps) => (
  <Input variant="flushed" bg="white" {...props} />
);

export default memo(() => {
  return (
    <form>
      <SimpleGrid columns={2} gap={6} maxW={1000} marginX="auto">
        <GridItem
          colSpan={{
            base: 2,
            md: 1,
          }}
        >
          <FormControl>
            <StyledLabel>会社名</StyledLabel>
            <StyledInput placeholder="株式会社ライトホープ" />
          </FormControl>
        </GridItem>
        <GridItem
          colSpan={{
            base: 2,
            md: 1,
          }}
        >
          <FormControl>
            <StyledLabel>お名前</StyledLabel>
            <StyledInput placeholder="佐藤健" />
          </FormControl>
        </GridItem>
        <GridItem
          colSpan={{
            base: 2,
            md: 1,
          }}
        >
          <FormControl>
            <StyledLabel>メールアドレス</StyledLabel>
            <StyledInput placeholder="email@example.com" />
          </FormControl>
        </GridItem>
        <GridItem
          colSpan={{
            base: 2,
            md: 1,
          }}
        >
          <FormControl>
            <StyledLabel>電話番号</StyledLabel>
            <StyledInput placeholder="090-1234-5678" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <StyledLabel>備考</StyledLabel>
            <Textarea
              placeholder="台数、お店の所在地など補足の情報があればご記入ください。"
              variant="flushed"
              rows={6}
            />
          </FormControl>
        </GridItem>
      </SimpleGrid>
      <Flex justifyContent="center" mt={8}>
        <Button rounded="full" size="lg" rightIcon={<FaPaperPlane />}>
          申し込む
        </Button>
      </Flex>
    </form>
  );
});
