import React from 'react'

import './ButtonArrow.scss'

type buttonProps = {
    text: string,
    color?: string,
}

const ButtonArrow: React.FC<buttonProps> = ({text,color}) => {
    return (
        <button style={{color: color}} className="buttonArrow">{text}→</button>
    )
}

export default ButtonArrow