import { Flex, Text, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { memo } from "react";
import { TbMinusVertical } from "react-icons/tb";

import { IconFeature } from "~/lib/features/Feature/components/IconFeature/IconFeature";

const MotionBox = motion(chakra.div);

export const IconFeatureType = memo(() => {
  return (
    <IconFeature
      icon={
        <Flex justify="center" align="center">
          <Text fontSize="100" fontWeight="bold" marginRight={-14} pl={14}>
            hey
          </Text>
          <Flex width={140} justify="center" align="center">
            <MotionBox
              color="primary.500"
              initial={{ display: "inline-block" }}
              animate={{
                display: ["inline-block", "none"],
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
                repeatDelay: 1,
              }}
            >
              <TbMinusVertical />
            </MotionBox>
          </Flex>
        </Flex>
      }
      title="Live Typing"
      description="Goodbye sending. Hello typing. Messages appear live as you type."
    />
  );
});
