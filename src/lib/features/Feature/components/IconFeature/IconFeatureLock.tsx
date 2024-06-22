import { chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { memo } from "react";
import { FaClock } from "react-icons/fa6";

import { IconFeature } from "~/lib/features/Feature/components/IconFeature/IconFeature";

const MotionBox = motion(chakra.div);

export const IconFeatureLock = memo(() => {
  return (
    <IconFeature
      colorScheme="blue"
      icon={
        <MotionBox
          initial={{ rotate: 0 }}
          animate={{
            rotate: [0, -15, 15, -15, 15, -15, 15, 0],
            scale: [1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          <FaClock />
        </MotionBox>
      }
      title="No Chat History"
      description="Only two live messages, instead of thousands that build up over time."
    />
  );
});
