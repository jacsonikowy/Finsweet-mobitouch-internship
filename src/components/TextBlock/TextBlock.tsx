import React from 'react'
import { createElement } from 'react'

import Paragraph from './Paragraph/Paragraph'

import './TextBlock.scss'

type variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type textblockProps = {
    headingText: string,
    description: string,
    level: variant,
    className?: string,
}

const TextBlock: React.FC<textblockProps> = ({
    level,
    headingText,
    description,
    className
}) => {
    return createElement(
        level,
        {className: `heading ${className}`},
        headingText,
        <Paragraph description={description}/>
    )
}

export default TextBlock