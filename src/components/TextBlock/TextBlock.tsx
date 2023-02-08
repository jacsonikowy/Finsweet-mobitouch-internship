import React from 'react'
import { createElement } from 'react'

import './TextBlock.scss'

type variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type textblockProps = {
    headingText: string,
    description: string,
    level: string,
    className?: string,
    style?: object,
}

const TextBlock: React.FC<textblockProps> = ({
    level,
    headingText,
    description,
    style,
    className
}) => {
    return createElement(
        level,
        { style: {style}, className: `heading ${className}`},
        headingText,
        createElement('p', { className: 'description' }, description)
    )
}

export default TextBlock