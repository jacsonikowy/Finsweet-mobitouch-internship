import React from "react";

import "./StellarForm.scss";
import TextBlock from "../../../components/TextBlock/TextBlock";

import FormStellar from "./FormStellar/FormStellar";

const StellarForm: React.FC = () => {
  return (
    <div className="stellarform">
      <div className="stellarform-flex">
        <div className="stellarform-flex-img">
          <TextBlock
            className="stellarform-flex-textblock"
            level="h1"
            headingText="Building stellar websites for early startups"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
          />
        </div>
        <div className="stellarform-flex-second">
          <TextBlock
            className="stellarform-flex-second-textblock"
            level="h5"
            headingText="Send inquiry"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
          <FormStellar />
        </div>
      </div>
    </div>
  );
};

export default StellarForm;
