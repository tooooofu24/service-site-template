import { memo } from "react";

import screenB from "~/lib/features/Feature/components/ScreenFeature/asssets/screenB.svg";
import { ScreenFeature } from "~/lib/features/Feature/components/ScreenFeature/ScreenFeature";

export const ScreenFeatureB = memo(() => {
  return (
    <ScreenFeature
      imageSrc={screenB.src}
      title="How it works"
      description="Design Buddy provides structured feedback covering layout, color, typography, accessibility, and guides you through design iterations."
    />
  );
});
