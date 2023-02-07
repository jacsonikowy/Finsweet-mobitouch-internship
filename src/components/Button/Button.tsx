import React from 'react'
import './Button.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
}

const Button: React.FC<ButtonProps> = ({text}) => {
    return (
        <div className='body1'>
            <button className='body1'>{text}</button> 
        </div>
        
    )
}

export default Button