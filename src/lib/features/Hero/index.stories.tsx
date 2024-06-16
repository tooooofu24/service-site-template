import { Box } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

import { MobileHero } from "~/lib/features/Hero/components/MobileHero";

const meta = {
  title: "Hero",
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const App: Story = {
  name: "モバイルアプリ",
  render: () => <MobileHero />,
};
