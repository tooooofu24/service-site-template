import { Box } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

import { SimpleBanner } from "~/lib/features/Banner/components/SimpleBanner/SimpleBanner";

const meta = {
  title: "バナー",
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  name: "シンプル",
  render: () => <SimpleBanner />,
};
