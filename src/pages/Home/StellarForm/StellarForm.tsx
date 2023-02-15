import React from 'react'
/* import { useFormik } from 'formik' */


import './StellarForm.scss'
import TextBlock from '../../../components/TextBlock/TextBlock';
import Button from '../../../components/Button/Button';

import WomanWritingOnPaper from '../../../assets/images/womanwritingonpaper.png'

const StellarForm: React.FC = () => {

    /* const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            figmaLink: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })
    */

    return (
        <div className='stellarform'>
            <div className="stellarform-flex">
                <div className='stellarform-flex-img'>
                    <TextBlock className="stellarform-flex-textblock" level='h1' headingText='Building stellar websites for early startups' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.' />
                </div>
                <div className="stellarform-flex-second">
                    <TextBlock className='stellarform-flex-second-textblock' level='h5' headingText='Send inquiry' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' />
                    <form className="form" action="">
                        <input className="body1" type="text" placeholder='Your Name'/>
                        <input className="body1" type="text" placeholder='Email'/>
                        <input className="body1" type="text" placeholder='Paste your Figma design URL'/>
                        <Button className="submitBtn" text="Submit an Inquiry" variant="primary" />
                        <Button className="stellarform-flex-second-buttonArrow" text='Get in touch with us' variant='arrowPrimary' withArrow={true} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default StellarForm