import React from 'react'

import './Projects.scss'

import Workhub from '../../../assets/images/Project1.png';
import Unisaas from '../../../assets/images/Unisaas.png';
import Church from '../../../assets/images/church.png';

const Projects: React.FC = () => {
    return (
        <div className='projects'>
            <h1>View our projects</h1>
            <div className='projectsGrid'>
                <div>
                    <span className='rectangle'></span>
                    <img src={Workhub} alt="" />
                </div>
                <div className="twoImages">
                    <img src={Unisaas} alt="" />
                    <img src={Church} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Projects