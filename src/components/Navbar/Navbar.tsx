import Button from '../Button'
import Links from './Links'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div>
                <h3>{'{Finsweet'}</h3>
            </div>
            <div className='navlinks'>
                <Links />
                <div>
                    <Button text="Contact Us" />
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar