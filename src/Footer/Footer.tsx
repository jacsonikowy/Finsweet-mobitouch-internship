import React from 'react'
import Links from "../components/Navbar/Links"
import TextBlock from "../components/TextBlock"

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footerEntry">
                <div>
                    <TextBlock headingText={'{Finsweet'} description={'We are always open to discuss your project and improve your online presence'} />
                </div>
            </div>
            <div className='footerEnd'>
                <p>Copyright 2021, Finsweet.com</p>
                <Links />
            </div>
        </footer>
    )
}

export default Footer