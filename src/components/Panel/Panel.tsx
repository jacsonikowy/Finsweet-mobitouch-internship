import React from 'react'

import TextBlock from '../TextBlock';

const Panel: React.FC<{headingText: string, level: any, description: string}> = ({headingText, level, description}) => {
    return (
        <div>
            <img src="" alt="tu bedzie ikona" />
            <TextBlock headingText={headingText} level={level} description={description}/>
        </div>
    )
}

export default Panel;