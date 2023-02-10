import React from 'react'

import './Mission.scss'

import TitleTextBlock from '../../../components/TitleTextBlock/TitleTextBlock'
import ManStanding from '../../../assets/images/manstanding.png'
import WomenAtMeeting from '../../../assets/images/womenatmeeting.png'

const Mission:React.FC = () => {
    return (
        <div className='mission'>
            <div className="mission-inspire">
                <TitleTextBlock className='mission-inspire-textblock' title='Our Mission' level='h3' headingText='Inspire, Innovate, Share' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
                <img src={ManStanding} alt="" />
            </div>
            <div className="mission-vision">
                <TitleTextBlock className='mission-vision-textblock' title='Our Vision' level='h3' headingText='Laser focus' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
                <img src={WomenAtMeeting} alt="" />
            </div>
        </div>
    )
}

export default Mission