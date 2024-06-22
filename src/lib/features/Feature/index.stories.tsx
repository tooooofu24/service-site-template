import { Box, Flex } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

import { IconFeatureLock } from "~/lib/features/Feature/components/IconFeature/IconFeatureLock";
import { IconFeatureRepeat } from "~/lib/features/Feature/components/IconFeature/IconFeatureRepeat";
import { IconFeatureType } from "~/lib/features/Feature/components/IconFeature/IconFeatureType";
import { ScreenFeatureA } from "~/lib/features/Feature/components/ScreenFeature/ScreenFeatureA";
import { ScreenFeatureB } from "~/lib/features/Feature/components/ScreenFeature/ScreenFeatureB";

const meta = {
  title: "機能",
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  name: "アイコン",
  render: () => (
    <Flex gap={4}>
      <IconFeatureLock />
      <IconFeatureRepeat />
      <IconFeatureType />
    </Flex>
  ),
};

export const Screen: Story = {
  name: "スクリーンショット",
  render: () => (
    <Flex gap={4}>
      <ScreenFeatureA />
      <ScreenFeatureB />
    </Flex>
  ),
};
