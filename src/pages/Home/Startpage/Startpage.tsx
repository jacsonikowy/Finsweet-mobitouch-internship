import React from 'react'
import TextBlock from '../../../components/TextBlock'
import Button from '../../../components/Button/Button'
import './Startpage.scss'

const Startpage: React.FC = () => {
    return (
        <div className='startpage'>
            <div className="container">
                <TextBlock headingText='Building stellar websites for early startups' level="h1" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'/>
                <span>
                    <Button text='View our work' />
                </span>
            </div>
        </div>
    )
}

export default Startpage