import React from 'react'
import './Button.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    variant: "primary" | "secondary",
    className?: string
}

const Button: React.FC<ButtonProps> = ({text, variant, className, ...props}) => {
    return (
        <button className={`button ${variant} ${className}`} {...props}>{text}</button> 
    )
}

export default Button