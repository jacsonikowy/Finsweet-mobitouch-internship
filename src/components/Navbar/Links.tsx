import "./Navbar.scss";

import { RoutesProps, routes } from "../../routes";
import { Link } from "react-router-dom";

interface LinkProps {
  className?: string;
}

const Links: React.FC<LinkProps> = ({ className }) => {
  return (
    <div className={`navlink ${className}`}>
      {routes.map((route: RoutesProps, index: number) => {
        return (
          <Link key={index} to={route.path}>
            {!route.notRender ? route.name : null}
          </Link>
        );
      })}
    </div>
  );
};

export default Links;
