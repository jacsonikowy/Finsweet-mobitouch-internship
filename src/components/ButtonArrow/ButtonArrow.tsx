import React from 'react'

const ButtonArrow: React.FC<{text: string}> = ({text}) => {
    return (
        <div>
            <button>{text}</button>
        </div>
    )
}

export default ButtonArrow