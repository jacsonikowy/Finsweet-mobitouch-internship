import { useState } from "react";
import Button from "../../components/Button/Button";
import Links from "./Links";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    IconLookup,
    IconDefinition,
    findIconDefinition,
} from "@fortawesome/fontawesome-svg-core";

import  { Link } from 'react-router-dom'

const barsLookup: IconLookup = { prefix: "fas", iconName: "bars" };
const barsIconDefiniton: IconDefinition = findIconDefinition(barsLookup);

const Navbar = () => {
    const [active, setActive] = useState(false);

    return (
        <nav>
            <div className="nav-start">
                <FontAwesomeIcon
                    className="bars"
                    icon={barsIconDefiniton}
                    onClick={() => setActive(!active)}
                />
                <h6>{"{Finsweet"}</h6>
            </div>
            <div className={`navlinks ${active ? "active" : ""}`}>
                <Links className="nav-links" />
                <Link to="/contact-us">
                    <Button variant="withoutBackground" text="Contact Us" />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
