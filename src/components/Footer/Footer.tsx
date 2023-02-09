import React from 'react'
import Links from "../Navbar/Links"
import TextBlock from "../TextBlock/TextBlock"
import './Footer.scss'


const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footerEntry">
                <div className="finsweet">
                    <TextBlock headingText='{Finsweet' level='h3' description='We are always open to discuss your project and improve your online presence' />
                    <div className='box'>
                            <div>
                                <p className='body2'>Email me at</p>
                                <p className='body1 opacity'>contact@website.com</p>
                            </div>
                            <div>
                                <p className='body2'>Call us</p>
                                <p className='body1 opacity'>0927 6277 28525</p>
                            </div>
                    </div>
                </div>
                <div className='letstalk'>
                    <TextBlock headingText="Lets Talk!" level='h2' description='We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.' />
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