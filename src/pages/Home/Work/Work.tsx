import React from 'react';

import TextBlock from '../../../components/TextBlock';
import Panel from '../../../components/Panel/Panel';
import './Work.scss'

import Pointer1 from '../../../assets/pointer1.png'
import Pointer2 from '../../../assets/pointer2.png'
import Pointer3 from '../../../assets/pointer3.png'
import Pointer4 from '../../../assets/pointer4.png'


const Work: React.FC = () => {
    return (
        <div className='work'>
            <div className='howwework'>
                <TextBlock headingText='How we work' level='h2' description='Lorem ipsum dolor sit amet, consectetur adipiscing, sed do eiusmod tempor.' />
            </div>
            <div className='panels'>
                <Panel headingText='Strategy' level='h5' description='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' icon={Pointer1}/>
                <Panel headingText='Wireframing' level='h5' description='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' icon={Pointer2}/>
                <Panel headingText='Design' level='h5' description='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' icon={Pointer3} />
                <Panel headingText='Development' level='h5' description='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' icon={Pointer4}/>
            </div>
        </div>
    )
}

export default Work