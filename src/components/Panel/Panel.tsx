import React from 'react'

import TextBlock from '../../components/TextBlock/TextBlock';
import { TextblockProps } from '../../components/TextBlock/TextBlock';

interface PanelProps extends TextblockProps{
    icon: string,
    className?: string,
}

const Panel: React.FC<PanelProps> = ({headingText, level, description, icon, className}) => {
    return (
        <div className={className}>
            <img src={icon} alt="pointer 1" />
            <TextBlock headingText={headingText} level={level} description={description}/>
        </div>
    )
}

export default Panel;