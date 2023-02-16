import React from "react";

import TitleTextBlock from "../../../components/TitleTextBlock/TitleTextBlock";

import TextBlock from "../../../components/TextBlock/TextBlock";
import ManInBlueJacket from "../../../assets/images/maninbluejacket.png";

import "./WhoWeAre.scss";

const WhoWeAre: React.FC = () => {
  return (
    <div className="whoweare">
      <div className="whoweare-background">
        <div className="whoweare-text">
          <TitleTextBlock
            className="whoweare-textblock"
            level="h3"
            title="Who we are"
            headingText="Goal focused"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <TextBlock
            className="whoweare-textblock"
            level="h3"
            headingText="Continuous improvement"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
      </div>
      <img src={ManInBlueJacket} alt="" />
    </div>
  );
};

export default WhoWeAre;
