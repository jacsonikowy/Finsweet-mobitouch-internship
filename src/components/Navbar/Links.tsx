import "./Navbar.scss";

import { RoutesProps, ElementsProps, routes } from "../../routes";
import { Link } from "react-router-dom";

interface LinkProps {
  className?: string;
}

const Links: React.FC<LinkProps> = ({ className }) => {
  return (
    <div className={`navlink ${className}`}>
      {routes.map((route: RoutesProps, index: number) => {
        return route.children.map((element) => {
          return (
            <Link key={index} to={element.path}>
              {!element.notRender ? element.name : null}
            </Link>
          );
        });
      })}
    </div>
  );
};

export default Links;
