import './Navbar.scss';

import { Link } from 'react-router-dom';

interface Iformat {
    (subpage: string): string
}

const getLinks: Iformat = (subpage: string) => {
    if(subpage.toLowerCase() === "home") {
        return '/'
    }
    return subpage.toLowerCase().split(" ").join("")
} 

const NavbarLink = ({subpage}: {subpage: string}) => {
    return (
        <Link to={getLinks(subpage)}>
            <a className="navlink" href="#index">{subpage}</a>
        </Link>
    )
}

export default NavbarLink;