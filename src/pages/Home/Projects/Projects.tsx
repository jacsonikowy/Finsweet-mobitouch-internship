import React from "react";

import "./Projects.scss";

import Workhub from "../../../assets/images/Project1.png";
import Unisaas from "../../../assets/images/Unisaas.png";
import Church from "../../../assets/images/church.png";
import TextBlock from "../../../components/TextBlock/TextBlock";
import ButtonArrow from "../../../components/ButtonArrow/ButtonArrow";

import ProjectPanel from '../../../components/ProjectPanel/ProjectPanel'

const Projects: React.FC = () => {
    return (
        <div className="projects">
            <ProjectPanel className="item-1" level="h6" headingText="Workhub office Webflow Webflow Design" description="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam " backgroundActive={true} backgroundWidth="396px" image={Workhub}/>
            <div className="item-2">
                <ProjectPanel level="h6" headingText="Unisaas Website Design" description="" backgroundActive={true} backgroundWidth="100%" image={Unisaas} />
                <ProjectPanel level="h6" headingText="Workhub Office Webflow Webflow Design" description="" backgroundActive={false} image={Church}/>
            </div>
        </div>
    );
};

export default Projects;
