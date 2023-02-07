import './Navbar.scss';

const NavbarLink = ({subpage}: {subpage: string}) => {
    return (
        <a className="navlink" href="#index">{subpage}</a>
    )
}

export default NavbarLink;