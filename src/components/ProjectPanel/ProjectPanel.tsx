import React from 'react'
import './ProjectPanel.scss'

import TextBlock, { TextblockProps } from '../TextBlock/TextBlock';
import ButtonArrow from '../ButtonArrow/ButtonArrow';

interface ProjectPanelProps extends TextblockProps{
    backgroundActive: boolean,
    image: string,
    backgroundWidth?: string,
}

const ProjectPanel: React.FC<ProjectPanelProps> = ({backgroundActive, headingText, level, description, image, backgroundWidth}) => {
    return (
        <div className='projectPanel'>
            <img src={image} alt="" />
            <div className={`projectPanel-block ${backgroundActive ? "background1" : ""}`}>
                <TextBlock className="projectPanel-block-textblock" level={level} headingText={headingText} description={description} />
                <ButtonArrow className="projectPanel-block-buttonArrow" color="#FCD980" text='View project' />
            </div>
        </div>
    )
}

export default ProjectPanel