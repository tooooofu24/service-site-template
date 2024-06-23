import { memo } from "react";

import { SimplePricing } from "~/lib/features/Pricing/components/SimplePricing/SimplePricing";

export const SimplePricingFree = memo(() => {
  return (
    <SimplePricing
      title="Free Trial"
      price={0}
      features={[
        "7-day free trial",
        "No credit card required",
        "Instant download",
      ]}
    />
  );
});
