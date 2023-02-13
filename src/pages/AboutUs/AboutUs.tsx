import React from 'react'

import './AboutUs.scss'


import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import OurDesign from './OurDesign/OurDesign'
import WhoWeAre from './WhoWeAre/WhoWeAre'
import ProcessWeFollow from './ProcessWeFollow/ProcessWeFollow'
import Mission from './Mission/Mission'
import Benefits from './Benefits/Benefits'
import MeetTeam from './MeetTeam/MeetTeam'


const AboutUs: React.FC = () => {
    return (
        <div className="aboutus">
            <Navbar />
            <OurDesign />
            <WhoWeAre />
            <ProcessWeFollow />
            <Mission />
            <Benefits />
            <MeetTeam />
            <Footer />
        </div>
    )
}

export default AboutUs