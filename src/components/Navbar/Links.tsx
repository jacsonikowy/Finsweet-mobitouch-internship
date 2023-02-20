import "./Navbar.scss";

import { RoutesProps, routes } from "../../routes";
import { NavLink } from "react-router-dom";

interface LinkProps {
  className?: string;
}

const activeStyle = {
  color: "#FFFFFF",
  borderBottom: "2px solid #FFFFFF",
};

const Links: React.FC<LinkProps> = ({ className }) => {
  return (
    <div className={`navlink ${className}`}>
      {routes.map((route: RoutesProps, index: number) => {
        return route.children.map((element) => {
          return (
            <NavLink
              key={index}
              to={element.path}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
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
