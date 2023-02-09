import React from 'react'

import './Projects.scss'

import Workhub from '../../../assets/images/Project1.png';
import Unisaas from '../../../assets/images/Unisaas.png';
import Church from '../../../assets/images/church.png';
import TextBlock from '../../../components/TextBlock/TextBlock';
import ButtonArrow from '../../../components/ButtonArrow/ButtonArrow';

const Projects: React.FC = () => {
    return (
        <div className="projects">
            <h1>Our Projects</h1>
            <div className="grid1">
                <div className="grid-item1">
                    <span className='rectangle'></span>
                    <div className='workhub'>
                        <TextBlock className='workhubtext' level='h5' headingText='Workhub office Webflow Webflow Design' description='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ' />
                        <ButtonArrow className='buttonarrow' color='#FCD980' text="View project" />
                    </div>
                    <img src={Workhub} alt="" />
                </div>
                <div className='flex-items'>
                    <div className="flex-item">
                        <span className='rectangle-1'></span>
                        <div className="unisaas">
                            <h6>Unisaas Website Design</h6>
                            <ButtonArrow className='buttonarrow' color='#FCD980' text='View project'/>
                        </div>
                        <img src={Unisaas} alt="" />
                    </div>
                    <div className="">
                        <img src={Church} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects