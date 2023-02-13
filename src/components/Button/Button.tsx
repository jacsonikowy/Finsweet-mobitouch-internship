import React from 'react'
import './Button.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    background: 'darkblue' | "yellow",
    textColor: 'white' | 'black',
}

const Button: React.FC<ButtonProps> = ({text, background, textColor, ...props}) => {
    return (
        <button className={`button ${textColor} ${background}`} {...props}>{text}</button> 
        
    )
}

export default Button