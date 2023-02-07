import Button from '../Button/Button'
import Links from './Links'
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav>
            <div>
                <h6>{'{Finsweet'}</h6>
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