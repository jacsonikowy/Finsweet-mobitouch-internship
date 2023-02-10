import React from 'react'

import TextBlock from '../../components/TextBlock/TextBlock'
import { TextblockProps } from '../../components/TextBlock/TextBlock'

interface TitleTextBlockProps extends TextblockProps {
    title: string,
}

const TitleTextBlock: React.FC<TitleTextBlockProps> = ({title, level, headingText, description, className}) => {
    return (
        <div className={className}>
            <p>{title}</p>
            <TextBlock level={level} headingText={headingText} description={description} />
        </div>
    )
}

export default TitleTextBlock