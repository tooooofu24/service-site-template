import { Box } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

import background from "~/lib/features/Header/assets/background.svg";

import { RoundedHeader } from "./components/RoundedHeader";
import { SimpleHeader } from "./components/SimpleHeader";
import { SkeletonHeader } from "./components/SkeletonHeader";

const meta = {
  title: "ヘッダー・メニュー",
  component: Box,
  decorators: [
    (Story) => (
      <Box
        position="relative"
        px={4}
        py={16}
        overflow="hidden"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(2px)",
          zIndex: -1,
        }}
      >
        <Story />
      </Box>
    ),
  ],
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
