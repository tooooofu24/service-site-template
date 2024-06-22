import { Box } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

import { RoundedHeader } from "~/lib/features/Header/components/RoundedHeader/RoundedHeader";
import { SimpleHeader } from "~/lib/features/Header/components/SimpleHeader/SimpleHeader";
import { SkeletonHeader } from "~/lib/features/Header/components/SkeltonHeader/SkeletonHeader";

const meta = {
  title: "ヘッダー・メニュー",
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  name: "シンプル",
  render: () => <SimpleHeader />,
};

export const Rounded: Story = {
  name: "角丸",
  render: () => <RoundedHeader />,
};

export const Skeleton: Story = {
  name: "スケルトン",
  render: () => <SkeletonHeader />,
};
