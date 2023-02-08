import React from 'react'
import './Button.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    background: string,
    textColor: string,
}

const Button: React.FC<ButtonProps> = ({text, background, textColor, ...props}) => {
    return (
        <button style={{backgroundColor: background}} className='button'>{text}</button> 
        
    )
}

export default Button