import { Box } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

import { SimpleFooter } from "~/lib/features/Footer/components/SimpleFooter/SimpleFooter";

const meta = {
  title: "フッター",
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  name: "シンプル",
  render: () => <SimpleFooter />,
};
