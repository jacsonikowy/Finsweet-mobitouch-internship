import React from 'react';

import TextBlock from '../../../components/TextBlock';
import Panel from '../../../components/Panel/Panel';
import './Work.scss'

const Work: React.FC = () => {
    return (
        <div className='work'>
            <div>
                <TextBlock headingText='How we work' level='h2' description='Lorem ipsum dolor sit amet, consectetur adipiscing, sed do eiusmod tempor.' />
            </div>
            <div className='panels'>
                <Panel headingText='Strategy' level='h5' description='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' />
                <Panel headingText='Wireframing' level='h5' description='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' />
                <Panel headingText='Design' level='h5' description='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' />
                <Panel headingText='Development' level='h5' description='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' />
            </div>
        </div>
    )
}

export default Work