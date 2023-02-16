import React from "react";
import "./Pricing.scss";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import PricingPlan from "./PricingPlan/PricingPlan";
import FAQ from "../../pages/Home/FAQ/FAQ";

const Pricing: React.FC = () => {
  return (
    <div className="pricing">
      <Navbar />
      <PricingPlan />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Pricing;
