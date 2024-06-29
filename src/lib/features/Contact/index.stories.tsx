import { Box } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

import { SimpleContact } from "~/lib/features/Contact/components/SimpleContact";

const meta = {
  title: "お問い合わせ",
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  name: "シンプル",
  render: () => <SimpleContact />,
};
