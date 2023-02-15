import React from "react";

import Panel from "../../../components/Panel/Panel";

import "./Features.scss";

import { Panels } from "../../../mocks/featuresData";

const renderPanels = () => {
    return Panels.map((panel) => {
        return (
            <Panel
                className="padding"
                icon={panel.icon}
                level="h6"
                headingText={panel.headingText}
                description="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            />
        );
    });
};

const Features: React.FC = () => {
    return (
        <div className="features">
            <div className="headings">
                <p className="body2">Features</p>
                <h1>Design that solves problems, one product at a time</h1>
            </div>
            <div className="panelsGrid">{renderPanels()}</div>
        </div>
    );
};

export default Features;
