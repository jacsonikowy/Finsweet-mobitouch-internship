import React from 'react'
import TextBlock from '../../../components/TextBlock/TextBlock'
import Button from '../../../components/Button/Button'
import './Startpage.scss'

import Illustration from '../../../assets/images/Illustration.png';

const Startpage: React.FC = () => {
    return (
        <div className='startpage'>
            <div className='textblock'>
                <TextBlock style={{width: 562}} headingText='Building stellar websites for early startups' level="h1" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'/>
                <img src={Illustration} alt="" />
            </div>
            <div>
                <Button text='View our work' background='#FCD980' textColor='#1B1C2B' />
            </div>
        </div>
    )
}

export default Startpage