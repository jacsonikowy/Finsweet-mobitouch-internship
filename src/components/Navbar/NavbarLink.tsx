import './Navbar.scss';

import { Link } from 'react-router-dom';

interface Iformat {
    (subpage: string): string
}

const getLinks: Iformat = (subpage: string) => {
    if(subpage.toLowerCase() === "home") {
        return '/'
    }
    return '/' + subpage.toLowerCase().split(" ").join("")
} 

const NavbarLink = ({subpage}: {subpage: string}) => {
    return (
        <Link to={getLinks(subpage)}>
            {subpage}
        </Link>
    )
}

export default NavbarLink;