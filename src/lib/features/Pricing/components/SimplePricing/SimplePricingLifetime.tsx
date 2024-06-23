import { memo } from "react";

import { SimplePricing } from "~/lib/features/Pricing/components/SimplePricing/SimplePricing";

export const SimplePricingLifetime = memo(() => {
  return (
    <SimplePricing
      title="Lifetime"
      price={100}
      features={[
        "Premiere Pro Extension",
        "10 animated presets (.pptx)",
        "Use your own .pptx",
        "One-time payment",
      ]}
    />
  );
});
