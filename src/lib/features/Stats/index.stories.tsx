import { Box, Flex } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

import { SimpleStats } from "~/lib/features/Stats/components/SimpleStats";

const meta = {
  title: "統計",
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  name: "シンプル",
  render: () => (
    <Flex gap={4}>
      <SimpleStats title="8,000+" description="Creators on the platform" />
      <SimpleStats title="3%" description="Flat platform fee" />
      <SimpleStats title="99.9%" description="Uptime guarantee" />
      <SimpleStats title="$70M" description="Paid out to creators" />
    </Flex>
  ),
};
