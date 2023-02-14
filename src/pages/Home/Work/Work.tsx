import React from 'react';

import TextBlock from '../../../components/TextBlock/TextBlock';
import Panel from '../../../components/Panel/Panel';
import './Work.scss'
import '../../../stylesheets/_variables.scss'

import { ReactComponent as Pointer1 } from '../../../assets/icons/pointer1.svg'
import { ReactComponent as Pointer2 } from '../../../assets/icons/pointer2.svg'
import { ReactComponent as Pointer3 } from '../../../assets/icons/pointer3.svg'
import { ReactComponent as Pointer4 } from '../../../assets/icons/pointer4.svg'

import ButtonArrow from '../../../components/ButtonArrow/ButtonArrow'

const pointers = [
    {
        icon: <Pointer1 />,
        headingText: "Strategy"
    },
    {
        icon: <Pointer2 />,
        headingText: "Wireframing"
    },
    {
        icon: <Pointer3 />,
        headingText: "Design"
    },
    {
        icon: <Pointer4 />,
        headingText: "Development"
    }
]

const renderPointers = () => {
    return pointers.map(pointer => {
        return <Panel className='panel' headingText={pointer.headingText} level='h5' description='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' icon={pointer.icon} />
    })
}


const Work: React.FC = () => {
    return (
        <div className='work'>
            <div className='howwework'>
                <TextBlock headingText='How we work' level='h2' description='Lorem ipsum dolor sit amet, consectetur adipiscing, sed do eiusmod tempor.' />
                <ButtonArrow text="Get in touch with us" color="#2405F2" />
            </div>
            <div className='panels'>
                {renderPointers()}
            </div>
        </div>
    )
}

export default Work