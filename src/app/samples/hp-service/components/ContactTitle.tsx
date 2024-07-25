import { Heading } from "@chakra-ui/react";
import { memo } from "react";

import Wave from "~/app/samples/hp-service/components/Wave";

export default memo(() => (
  <>
    <Wave />
    <Heading
      color="primary.700"
      bg="primary.100"
      textAlign="center"
      size={{
        base: "md",
        md: "lg",
      }}
    >
      お問い合わせ
    </Heading>
    <Wave flip />
  </>
));
