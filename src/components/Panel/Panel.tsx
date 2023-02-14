import React from 'react'
import './Panel.scss'

import TextBlock from '../../components/TextBlock/TextBlock';
import { TextblockProps } from '../../components/TextBlock/TextBlock';

export interface PanelProps extends TextblockProps{
    icon: React.ReactNode,
    className?: string,
}

const Panel: React.FC<PanelProps> = ({headingText, level, description, icon, className}) => {
    return (
        <div className={`panel ${className}`}>
            {icon}
            <TextBlock className="panel-textblock" headingText={headingText} level={level} description={description}/>
        </div>
    )
}

export default Panel;