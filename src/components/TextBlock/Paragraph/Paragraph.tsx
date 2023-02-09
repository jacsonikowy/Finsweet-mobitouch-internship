import React from 'react'

import './Paragraph.scss'


interface ParagraphProps {
    description: string,
}

const Paragraph: React.FC<ParagraphProps> = ({description}) => {
    return (
        <p className='body1'>{description}</p>
    )
}

export default Paragraph