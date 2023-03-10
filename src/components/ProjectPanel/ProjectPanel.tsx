import React from "react";
import "./ProjectPanel.scss";

import TextBlock, { TextblockProps } from "../TextBlock/TextBlock";
import Button from "../Button/Button";

interface ProjectPanelProps extends TextblockProps {
  backgroundActive: boolean;
  image: string;
  backgroundWidth?: "max" | "secondary";
}

const ProjectPanel: React.FC<ProjectPanelProps> = ({
  backgroundActive,
  headingText,
  level,
  description,
  image,
  backgroundWidth,
}) => {
  return (
    <div className={`projectPanel ${backgroundActive ? "background1" : ""}`}>
      <img className="projectPanel-img" src={image} alt="" />
      <div
        className={`projectPanel-block ${
          backgroundWidth === "max" && backgroundActive
            ? "max"
            : backgroundActive
            ? "secondary"
            : ""
        }`}
      >
        <TextBlock
          className={`projectPanel-block-textblock ${
            !backgroundActive ? "unactive" : ""
          }`}
          level={level}
          headingText={headingText}
          description={description}
        />
        <Button
          className={`projectPanel-block-buttonArrow ${
            !backgroundActive ? "unactive" : ""
          }`}
          variant="yellow"
          text="View project"
          withArrow={true}
        />
      </div>
    </div>
  );
};

export default ProjectPanel;
