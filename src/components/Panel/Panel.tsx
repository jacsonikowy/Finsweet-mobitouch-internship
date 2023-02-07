import React from 'react'

import TextBlock from '../TextBlock';

const Panel: React.FC<{headingText: string, level: any, description: string, icon: string}> = ({headingText, level, description, icon}) => {
    return (
        <div>
            <img src={icon} alt="pointer 1" />
            <TextBlock headingText={headingText} level={level} description={description}/>
        </div>
    )
}

export default Panel;