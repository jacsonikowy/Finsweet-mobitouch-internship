import React from 'react'
import './ContactUs.scss'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Form from './Form/Form'

const ContactUs: React.FC = () => {
    return (
        <div className="contactus">
            <Navbar />
            <Form />
            <Footer />
        </div>
    )
}

export default ContactUs