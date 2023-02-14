import NavbarLink from "./NavbarLink";
import "./Navbar.scss";

interface LinkProps {
    className?: string;
}

const Links: React.FC<LinkProps> = ({ className }) => {
    return (
        <div className={`navlink ${className}`}>
            <NavbarLink subpage={"Home"}></NavbarLink>
            <NavbarLink subpage={"About us"}></NavbarLink>
            <NavbarLink subpage={"Features"}></NavbarLink>
            <NavbarLink subpage={"Pricing"}></NavbarLink>
            <NavbarLink subpage={"FAQ"}></NavbarLink>
            <NavbarLink subpage={"Blog"}></NavbarLink>
        </div>
    );
};

export default Links;
