import React from "react";

import "./Projects.scss";

import Workhub from "../../../assets/images/Project1.png";
import Unisaas from "../../../assets/images/Unisaas.png";
import Church from "../../../assets/images/church.png";
import TextBlock from "../../../components/TextBlock/TextBlock";
import ButtonArrow from "../../../components/ButtonArrow/ButtonArrow";

import ProjectPanel from "../../../components/ProjectPanel/ProjectPanel";

const Projects: React.FC = () => {
    return (
        <div className="projects">
            <div className="projects-text">
                <h2>View our projects</h2>
                <ButtonArrow text="View More" />
            </div>
            <div className="grid">
                <ProjectPanel
                    className="item-1"
                    level="h6"
                    headingText="Workhub office Webflow Webflow Design"
                    description="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam "
                    backgroundActive={true}
                    backgroundWidth="secondary"
                    image={Workhub}
                />
                <div className="item-2">
                    <ProjectPanel
                        level="h6"
                        headingText="Unisaas Website Design"
                        description=""
                        backgroundActive={true}
                        backgroundWidth="max"
                        image={Unisaas}
                    />
                    <ProjectPanel
                        level="h6"
                        headingText="Workhub Office Webflow Webflow Design"
                        description=""
                        backgroundActive={false}
                        image={Church}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
