import React from 'react'
import { useFormik } from 'formik'


import './StellarForm.scss'
import TextBlock from '../../../components/TextBlock/TextBlock';
import Button from '../../../components/Button/Button';

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
        <div className='grid'>
            <div className='background'></div>
            <div className='grid-item'>
                <div className="background-1"></div>
                <TextBlock className="text" level='h1' headingText='Building stellar websites for early startups' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.' />
            </div>
            <div className='grid-item'>
                <div className='background-2'></div>
                <TextBlock className='text' level='h5' headingText='Send inquiry' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' />
                <form action="">
                    <input className="body1" type="text" placeholder='Your Name'/>
                    <input className="body1" type="text" placeholder='Email'/>
                    <input className="body1" type="text" placeholder='Paste your Figma design URL'/>
                    <Button className="submitBtn" text="Submit an Inquiry" background='#FCD980' textColor='black' />
                </form>
            </div>
        </div>
    )
}

export default StellarForm