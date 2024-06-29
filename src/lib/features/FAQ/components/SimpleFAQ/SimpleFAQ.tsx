import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { memo } from "react";

type Props = {
  title: string;
  content: string;
};

export const SimpleFAQ = memo(({ title, content }: Props) => {
  return (
    <Accordion allowToggle p={6} rounded={32} bg="white">
      <AccordionItem border="none">
        <h2>
          <AccordionButton _hover="none" _expanded={{ color: "primary.500" }}>
            <Box as="span" flex="1" textAlign="left" fontWeight="bold">
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} color="gray.600">
          {content}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
});
