import React from "react";

import "./Projects.scss";

import Workhub from "../../../assets/images/Project1.png";
import Unisaas from "../../../assets/images/Unisaas.png";
import Church from "../../../assets/images/church.png";
import TextBlock from "../../../components/TextBlock/TextBlock";
import ButtonArrow from "../../../components/ButtonArrow/ButtonArrow";

const Projects: React.FC = () => {
    return (
        <div className="projects">
            <div className="item item-1">
                <img src={Workhub} alt="workhub" />
                <div className="item-block">
                    <TextBlock
                        className="item-block-textblock"
                        level="h6"
                        headingText="Worhub office Webflow Webflow Design"
                        description="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam"
                    />
                    <ButtonArrow color="#FCD980" text="View project" />
                </div>
            </div>
            <div className="item item-2">
                <div className="unisaas">
                    <img src={Unisaas} alt="unisaas" />
                    <div className="item-block2">
                        <h6>Unisaas Wesbite Design</h6>
                        <ButtonArrow color="#FCD980" text="View Portfolio" />
                    </div>
                </div>
                <img src={Church} alt="church" />
            </div>
        </div>
    );
};

export default Projects;
