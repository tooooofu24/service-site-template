import { Container, Flex } from "@chakra-ui/react";
import { memo } from "react";

import ai from "~/app/samples/hp-service/components/assets/ai.svg";
import marketing from "~/app/samples/hp-service/components/assets/marketing.svg";
import support from "~/app/samples/hp-service/components/assets/support.svg";
import Section from "~/app/samples/hp-service/components/Section";

export default memo(() => {
  return (
    <Container maxW="container.lg">
      <Flex justifyContent="center" flexDir="column" gap={8} p={4}>
        <Section
          icon={ai.src}
          title={`AIアシスタントによる\nデザイン提案`}
          description="AIがユーザーの入力に基づいて最適なデザイン提案を行うため、初心者でもプロ並みのサイトを簡単に作成できます。他のサービスにはない、個別に最適化されたデザイン提案が特徴です。"
        />
        <Section
          flip
          icon={support.src}
          title="一貫したユーザーサポート"
          description="24時間対応のカスタマーサポートを提供し、技術的な問題やデザインの相談に迅速に対応します。他のサービスよりもサポート体制が充実しているため、初心者でも安心して利用できます。"
        />
        <Section
          icon={marketing.src}
          title={`統合された\nマーケティングツール`}
          description="メールマーケティング、SNS連携、分析ツールが一体化されており、ウェブサイトの運営からプロモーションまで一貫して管理できます。これにより、サイトの成長とユーザーエンゲージメントを強力にサポートします。他のサービスにはない包括的なマーケティング機能が差別化ポイントです。"
        />
      </Flex>
    </Container>
  );
});
