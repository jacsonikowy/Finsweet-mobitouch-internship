import React from 'react'
import './Button.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    variant: "primary" | "secondary" | "arrowPrimary" | "arrowSecondary" | "black" | "withoutBackground",
    withArrow?: boolean
}

const Button: React.FC<ButtonProps> = ({text, variant, withArrow, ...props}) => {
    return (
        <button className={`button ${variant}`} {...props}>{text}{withArrow ? "→": ""}</button> 
    )
}

export default Button