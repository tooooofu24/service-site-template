import { Link, Tag } from "@chakra-ui/react";
import { memo } from "react";
import { FaArrowRight } from "react-icons/fa6";

export const SimpleBanner = memo(() => {
  return (
    <Tag size="lg">
      <Link mr={2}>
        GeneriCon 2023Join us in Denver from June 7 – 9 to see what’s coming
        next
      </Link>
      <FaArrowRight />
    </Tag>
  );
});
