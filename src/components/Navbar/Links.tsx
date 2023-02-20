import "./Navbar.scss";

import { RoutesProps, routes } from "../../routes";
import { NavLink } from "react-router-dom";
import { MouseEventHandler } from "react";

interface LinkProps {
  className?: string;
  onClick?: MouseEventHandler;
}

const activeStyle = {
  color: "#FFFFFF",
  borderBottom: "2px solid #FFFFFF",
};

const Links: React.FC<LinkProps> = ({ className, onClick }) => {
  return (
    <div className={`navlink ${className}`}>
      {routes.map((route: RoutesProps, index: number) => {
        return route.children.map((element) => {
          return (
            <NavLink
              key={index}
              to={element.path}
              style={({ isActive }) =>
                isActive && !element.notRender ? activeStyle : undefined
              }
              onClick={onClick}
            >
              {!element.notRender ? element.name : null}
            </NavLink>
          );
        });
      })}
    </div>
  );
};

export default Links;
