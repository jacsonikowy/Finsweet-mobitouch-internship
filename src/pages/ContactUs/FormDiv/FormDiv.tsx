import React from "react";
import "./FormDiv.scss";

import TextBlock from "../../../components/TextBlock/TextBlock";
import Form from "./Form/Form";

const FormDiv: React.FC = () => {
  return (
    <div className="contactus-formdiv">
      <TextBlock
        className="contactus-formdiv-textblock"
        headingText="Contact Us"
        level="h2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
      />
      <Form />
    </div>
  );
};

export default FormDiv;
