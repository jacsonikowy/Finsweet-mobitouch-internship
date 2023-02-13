import Button from '../../components/Button/Button'
import Links from './Links'
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav>
            <h6>{'{Finsweet'}</h6>
            <div className='navlinks'>
                <Links />
                <Button text="Contact Us" background="darkblue" textColor='white' />
            </div>
        </nav>
    )
}

export default Navbar