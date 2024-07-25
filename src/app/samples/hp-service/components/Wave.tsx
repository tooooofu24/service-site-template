import { Box } from "@chakra-ui/react";
import { memo } from "react";

import waveDown from "~/app/samples/hp-service/components/assets/wave-down.svg";
import waveUp from "~/app/samples/hp-service/components/assets/wave-up.svg";

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
        background: `url("${flip ? waveDown.src : waveUp.src}") no-repeat`,
        backgroundSize: "cover",
      }}
    />
  );
});
