import React from "react";
import "./TeamMember.scss";

export interface TeamMemberProps {
  img: string;
  name: string;
  title: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ img, name, title }) => {
  return (
    <div className="teammember">
      <img src={img} alt="Team Member" />
      <h6>{name}</h6>
      <p className="body1">{title}</p>
    </div>
  );
};

export default TeamMember;
