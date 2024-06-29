import { Box, Flex } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

import { SimpleFAQ } from "~/lib/features/FAQ/components/SimpleFAQ/SimpleFAQ";

const meta = {
  title: "FAQ",
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  name: "シンプル",
  render: () => (
    <Flex gap={4} w="full" flexDir="column" bg="primary.100" p={4}>
      <SimpleFAQ
        title="What are the system requirements for Captioneer?"
        content="Captioneer is compatible with Windows and MacOS machines running Adobe Premiere Pro 2022+."
      />
      <SimpleFAQ
        title="How do I install Captioneer?"
        content="Follow install instructions in the online User Guide."
      />
      <SimpleFAQ
        title="How can I edit the timing?"
        content="Edit using Premiere Pro’s native Text panel or directly in the timeline."
      />
      <SimpleFAQ
        title="How can I edit the style?"
        content="Edit designs instantly from the Essential Graphics Panel."
      />
      <SimpleFAQ
        title="Can I build my own designs?"
        content="Yes! You can build any .mogrt in After Effects to use with Captioneer."
      />
      <SimpleFAQ
        title="Can I use Captioneer on multiple computers?"
        content="Yes! You can move licenses between computers at any time with the License Manager."
      />
    </Flex>
  ),
};
