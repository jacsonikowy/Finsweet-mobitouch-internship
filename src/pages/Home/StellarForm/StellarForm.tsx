import React from 'react'
import { useFormik } from 'formik'

import Convert from '../../../assets/images/womanwritingonpaper.png';
import Background from '../../../assets/images/Background.png';

import './StellarForm.scss'
import TextBlock from '../../../components/TextBlock/TextBlock';

const StellarForm: React.FC = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            figmaLink: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    return (
        <div className='stellar'>
            <div className='backgroundImage'>
                    <img src={Convert} alt="" />
                <div className='stellarStart'>
                    <TextBlock level='h2' headingText='Building stellar websites for early startups' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.' />
                </div>
                <img src={Background} alt="" />
            </div>
        </div>
    )
}

export default StellarForm