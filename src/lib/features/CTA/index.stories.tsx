import { Box } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

import { ImageCTA } from "~/lib/features/CTA/components/ImageCTA/ImageCTA";

const meta = {
  title: "CTA",
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Image: Story = {
  name: "画像",
  render: () => <ImageCTA />,
};
