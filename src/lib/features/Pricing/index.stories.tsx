import { Box, Flex } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

import { SimplePricingFree } from "~/lib/features/Pricing/components/SimplePricing/SimplePricingFree";
import { SimplePricingLifetime } from "~/lib/features/Pricing/components/SimplePricing/SimplePricingLifetime";
import { SimplePricingSubscription } from "~/lib/features/Pricing/components/SimplePricing/SimplePricingSubscription";

const meta = {
  title: "料金",
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  name: "シンプル",
  render: () => (
    <Flex gap={4}>
      <SimplePricingFree />
      <SimplePricingSubscription />
      <SimplePricingLifetime />
    </Flex>
  ),
};
