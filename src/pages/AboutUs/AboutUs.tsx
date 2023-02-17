import React from "react";

import "./AboutUs.scss";

import OurDesign from "./OurDesign/OurDesign";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import ProcessWeFollow from "./ProcessWeFollow/ProcessWeFollow";
import Mission from "./Mission/Mission";
import Benefits from "./Benefits/Benefits";
import MeetTeam from "./MeetTeam/MeetTeam";

const AboutUs: React.FC = () => {
  return (
    <div className="aboutus">
      <OurDesign />
      <WhoWeAre />
      <ProcessWeFollow />
      <Mission />
      <Benefits />
      <MeetTeam />
    </div>
  );
};

export default AboutUs;
