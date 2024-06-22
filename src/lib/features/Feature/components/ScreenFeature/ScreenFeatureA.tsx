import { memo } from "react";

import screenA from "~/lib/features/Feature/components/ScreenFeature/asssets/screenA.svg";
import { ScreenFeature } from "~/lib/features/Feature/components/ScreenFeature/ScreenFeature";

export const ScreenFeatureA = memo(() => {
  return (
    <ScreenFeature
      imageSrc={screenA.src}
      title="What is Design Buddy"
      description="Design Buddy is an AI-powered Figma plugin that's like a helpful teammate, offering insightful design review on your UI designs."
    />
  );
});
