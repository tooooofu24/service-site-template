import { Box, Flex } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

import { SimpleInformation } from "~/lib/features/Information/components/SimpleInformation/SimpleInformation";

const meta = {
  title: "インフォメーション",
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  name: "シンプル",
  render: () => (
    <Flex justifyContent="center">
      <SimpleInformation />
    </Flex>
  ),
};
