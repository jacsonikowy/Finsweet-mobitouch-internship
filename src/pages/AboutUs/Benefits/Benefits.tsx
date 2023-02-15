import React from "react";
import Panel, { PanelProps } from "../../../components/Panel/Panel";
import TextBlock from "../../../components/TextBlock/TextBlock";

import "./Benefits.scss";

import logo1 from "../../../assets/icons/logo1.png";
import logo2 from "../../../assets/icons/logo2.png";
import logo3 from "../../../assets/icons/logo3.png";
import logo4 from "../../../assets/icons/logo4.png";
import logo5 from "../../../assets/icons/logo5.png";

import { panelValues } from "../../../mocks/benefitsPanelData";

const logos: string[] = [logo1, logo2, logo3, logo4, logo5];

const Benefits: React.FC = () => {
    return (
        <div className="benefits">
            <h2>The benefits of working with us</h2>
            <div className="benefits-panels">
                {panelValues.map((panel: PanelProps) => {
                    return (
                        <Panel
                            className="benefits-panels-panel"
                            headingText={panel.headingText}
                            level={panel.level}
                            description={panel.description}
                            icon={panel.icon}
                        />
                    );
                })}
            </div>
            <div className="benefits-icons">
                <TextBlock
                    className="benefits-icons-textblock"
                    level="h3"
                    headingText="100.000+"
                    description="Finsweet Users"
                />
                {logos.map((logo) => {
                    return <img src={logo} alt="logo" />;
                })}
            </div>
        </div>
    );
};

export default Benefits;
