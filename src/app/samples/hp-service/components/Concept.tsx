import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { memo } from "react";

import img from "~/app/samples/hp-service/components/assets/iphone.jpg";

const PCView = memo(() => (
  <Flex w="full" maxWidth="container.lg" mx="auto">
    <Flex flex={1} justifyContent="center" alignItems="center" p={12}>
      <Image src={img.src} alt="iphone" width="full" rounded={16} shadow="lg" />
    </Flex>
    <Flex flex={1} p={12} flexDir="column" justifyContent="center" gap={4}>
      <Heading size="lg">
        誰でも自分のHPを持てる
        <br />
        サービス
      </Heading>
      <Text color="gray.600" mt={4} as="p">
        技術的な知識がなくても簡単に美しいウェブサイトを作成できるプラットフォームです。ドラッグ＆ドロップ機能や多彩なテンプレートを利用して、個人ブログからビジネスサイトまで自由にカスタマイズできます。SEO対策やモバイル対応も完備し、誰でも手軽に自分だけのオンラインプレゼンスを確立できます。{" "}
      </Text>
    </Flex>
  </Flex>
));

const SPView = memo(() => (
  <Box px={8} py={16}>
    <Image src={img.src} alt="iphone" width="full" rounded={16} shadow="lg" />
    <Flex flexDir="column" justifyContent="center" gap={2} mt={4}>
      <Heading size="lg">
        誰でも自分のHPを持てる
        <br />
        サービス
      </Heading>
      <Text color="gray.600" as="p" fontSize="small">
        技術的な知識がなくても簡単に美しいウェブサイトを作成できるプラットフォームです。ドラッグ＆ドロップ機能や多彩なテンプレートを利用して、個人ブログからビジネスサイトまで自由にカスタマイズできます。SEO対策やモバイル対応も完備し、誰でも手軽に自分だけのオンラインプレゼンスを確立できます。{" "}
      </Text>
    </Flex>
  </Box>
));

export default memo(() => {
  return (
    <>
      <Box display={{ base: "none", md: "block" }}>
        <PCView />
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <SPView />
      </Box>
    </>
  );
});
