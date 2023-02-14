import React from 'react'
import TextBlock from '../../../components/TextBlock/TextBlock'
import Button from '../../../components/Button/Button'
import './Startpage.scss'

import ButtonArrow from '../../../components/ButtonArrow/ButtonArrow'
import Illustration from '../../../assets/images/Illustration.png';

const Startpage: React.FC = () => {
    return (
        <div className='startpage'>
            <div className='textblock'>
                <TextBlock headingText='Building stellar websites for early startups' level="h1" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'/>
                <img src={Illustration} alt="" />
            </div>
            <div className='buttons'>
                <Button className="buttons-button" text='View our work' variant='primary' />
                <ButtonArrow text="View Pricing" color="white" />
            </div>
        </div>
    )
}

export default Startpage