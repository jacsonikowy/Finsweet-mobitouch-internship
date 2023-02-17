import React from "react";
import "./Pricing.scss";

import PricingPlan from "./PricingPlan/PricingPlan";
import FAQ from "../../pages/Home/FAQ/FAQ";

const Pricing: React.FC = () => {
  return (
    <div className="pricing">
      <PricingPlan />
      <FAQ />
    </div>
  );
};

export default Pricing;
