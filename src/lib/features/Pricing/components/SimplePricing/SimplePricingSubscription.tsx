import { memo } from "react";

import { SimplePricing } from "~/lib/features/Pricing/components/SimplePricing/SimplePricing";

export const SimplePricingSubscription = memo(() => {
  return (
    <SimplePricing
      title="Subscription"
      price={10}
      features={[
        "Premiere Pro Extension",
        "10 animated presets (.pptx)",
        "Use your own .pptx",
        "Pause or cancel anytime",
      ]}
      isRecommended
    />
  );
});
