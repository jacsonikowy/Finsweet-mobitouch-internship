import React from 'react'
import './Button.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    background: string,
    textColor: string,
}

const Button: React.FC<ButtonProps> = ({text, background, textColor, className}) => {
    return (
        <button style={{backgroundColor: background}} className={`button ${className}`}>{text}</button> 
        
    )
}

export default Button