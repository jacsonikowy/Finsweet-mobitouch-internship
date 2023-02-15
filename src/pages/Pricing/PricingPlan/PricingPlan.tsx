import React from "react";
import "./PricingPlan.scss";

import TextBlock from "../../../components/TextBlock/TextBlock";
import PricingCard from "../../../components/PricingCard/PricingCard";

import { pricingCards } from "../../../mocks/pricingData";

const PricingPlan: React.FC = () => {
    return (
        <div className="pricingplan">
            <TextBlock
                className="pricingplan-textblock"
                level="h2"
                headingText="Our Pricing Plans"
                description="When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them."
            />
            <div className="pricingplan-cards">
                {pricingCards.map((pricingCard) => {
                    return (
                        <PricingCard
                            price={pricingCard.price}
                            content={pricingCard.content}
                            backgroundColor={pricingCard.backgroundColor}
                            textColor={pricingCard.textColor}
                            productName={pricingCard.productName}
                            productDescription={pricingCard.productDescription}
                            ArrayOfLinks={pricingCard.ArrayOfLinks}
                            buttonName={pricingCard.buttonName}
                            buttonVariant={pricingCard.buttonVariant}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default PricingPlan;
