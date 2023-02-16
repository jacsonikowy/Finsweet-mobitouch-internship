import React from 'react'
import './ContactUs.scss'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import FormDiv from './FormDiv/FormDiv'

const ContactUs: React.FC = () => {
    return (
        <div className="contactus">
            <Navbar />
            <FormDiv />
            <Footer />
        </div>
    )
}

export default ContactUs