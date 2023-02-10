import React from 'react'

import './OurDesign.scss'

import TextBlock from '../../../components/TextBlock/TextBlock'
import PeopleOutdoor from '../../../assets/images/peopleOutdoor.png'

const OurDesign: React.FC = () => {
    return (
        <div className="ourDesign">
            <div className='aboutUsDiv'>
                <p className='body1 aboutusp'>About us</p>
                <TextBlock className="textblockDesign" level='h1' headingText='Our designs solve problems' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
            </div>
            <img src={PeopleOutdoor} alt="" />
        </div>
    )
}

export default OurDesign