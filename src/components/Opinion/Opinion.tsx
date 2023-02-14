import React from 'react'

import './Opinion.scss'

import LeftArrow from '../../assets/icons/LeftArrow.png'
import RightArrow from '../../assets/icons/RightArrow.png'

type opinionProps = {
    avatar: string,
    text: string,
    fullname: string,
    title: string,
    className?: string,
}

const Opinion: React.FC<opinionProps> = ({avatar, text, fullname, title, className}) => {
    return (
        <div className={`review ${className}`}>
            <h5>"{text}"</h5>
            <div className='description'>
                <img src={avatar} alt="" />
                <div className='opinion'>
                    <span>{fullname}</span>
                    <p className='review-title'>{title}</p>
                </div>
            </div>
            <div className='rectangles'>
                <span>
                    <img className='whiteRectangle rectangle' src={LeftArrow} alt="" />
                </span>
                <span>
                    <img className='purpleRectangle rectangle' src={RightArrow} alt="" />
                </span>
            </div>
        </div>
    )
}

export default Opinion