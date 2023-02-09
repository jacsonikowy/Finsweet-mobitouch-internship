import React from 'react'

import './ButtonArrow.scss'

type buttonProps = {
    text: string,
    color?: string,
    className?: string,
}

const ButtonArrow: React.FC<buttonProps> = ({text,color, className}) => {
    return (
        <button style={{color: color}} className={`buttonArrow body2 ${className}`}>{text}→</button>
    )
}

export default ButtonArrow