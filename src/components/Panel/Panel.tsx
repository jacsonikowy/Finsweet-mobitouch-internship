import React from 'react'

import TextBlock from '../../components/TextBlock/TextBlock';
import { textblockProps } from '../../components/TextBlock/TextBlock';

interface panelProps extends textblockProps{
    icon: string,
    className?: string,
}

const Panel: React.FC<panelProps> = ({headingText, level, description, icon, className}) => {
    return (
        <div className={className}>
            <img src={icon} alt="pointer 1" />
            <TextBlock headingText={headingText} level={level} description={description}/>
        </div>
    )
}

export default Panel;