import { Box } from "@chakra-ui/react";
import { memo } from "react";

import wave from "~/app/samples/hp-service/components/assets/wave.svg";

type Props = {
  flip?: boolean;
};

export default memo(({ flip }: Props) => {
  return (
    <Box
      position="relative"
      height="10vw"
      _before={{
        content: '""',
        display: "block",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        left: "0",
        background: `url("${wave.src}") no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: flip ? "top" : "bottom",
        transform: flip ? "scaleY(-1) scaleX(-1)" : "none",
      }}
    />
  );
});
