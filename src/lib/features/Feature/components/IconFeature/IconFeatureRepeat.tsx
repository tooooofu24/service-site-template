import { chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { memo } from "react";
import { FaArrowsRotate } from "react-icons/fa6";

import { IconFeature } from "~/lib/features/Feature/components/IconFeature/IconFeature";

const MotionBox = motion(chakra.div);

export const IconFeatureRepeat = memo(() => {
  return (
    <IconFeature
      icon={
        <MotionBox
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          <FaArrowsRotate />
        </MotionBox>
      }
      title="No Send Button"
      description="Never hit send again. Just type a message and clear it to say something new."
    />
  );
});
