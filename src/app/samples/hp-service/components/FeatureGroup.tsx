import { Flex } from "@chakra-ui/react";
import { memo } from "react";

import chart from "~/app/samples/hp-service/components/assets/chart.svg";
import draw from "~/app/samples/hp-service/components/assets/draw.svg";
import notes from "~/app/samples/hp-service/components/assets/notes.svg";
import Feature from "~/app/samples/hp-service/components/Feature";

export default memo(() => {
  return (
    <Flex gap={8} justifyContent="center" flexWrap="wrap">
      <Feature
        icon={draw.src}
        title="直感的なデザイン"
        description="ドラッグ＆ドロップ機能と豊富なテンプレートを備え、技術的な知識がなくても誰でも簡単に美しいウェブサイトを作成できます。"
      />
      <Feature
        icon={chart.src}
        title="強固なSEO対策"
        description="自動SEO最適化とレスポンシブデザインにより、作成したサイトが検索エンジンで上位表示されやすく、スマートフォンやタブレットでも快適に閲覧できます。"
      />
      <Feature
        icon={notes.src}
        title="多用途に対応可能"
        description="個人ブログ、ポートフォリオ、オンラインショップ、企業サイトなど、あらゆる用途に応じたカスタマイズが可能で、自分の目的に合ったウェブサイトを手軽に構築できます。"
      />
    </Flex>
  );
});
