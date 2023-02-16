import React from 'react'
import './FormDiv.scss'

import TextBlock from '../../../components/TextBlock/TextBlock'
import FormStellar from './Form/ContactUsForm'

const FormDiv: React.FC = () => {
    return (
        <div className="contactus-formdiv">
            <TextBlock className="contactus-formdiv-textblock" headingText='Contact Us' level='h2' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' />
            <FormStellar />
        </div>
    )
}

export default FormDiv