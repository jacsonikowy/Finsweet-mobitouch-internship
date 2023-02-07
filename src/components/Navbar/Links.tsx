import NavbarLink from "./NavbarLink"
import './Navbar.scss'

const Links: React.FC = () => {
    return (
        <div >
            <NavbarLink subpage={'Home'}></NavbarLink>
            <NavbarLink subpage={'About us'}></NavbarLink>
            <NavbarLink subpage={'Features'}></NavbarLink>
            <NavbarLink subpage={'Pricing'}></NavbarLink>
            <NavbarLink subpage={'FAQ'}></NavbarLink>
            <NavbarLink subpage={'Blog'}></NavbarLink>
        </div>
        
    )
}

export default Links