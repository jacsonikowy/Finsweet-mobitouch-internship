import React from 'react'
import { PanelProps }  from '../Panel/Panel'
import Panel from '../Panel/Panel'
import './PanelDotted.scss';

const PanelDotted: React.FC<PanelProps> = ({headingText, level, description, icon}) => {
    return (
        <>
            <Panel className='paneldotted' headingText={headingText} level={level} description={description} icon={icon} />
            <div className='horizontal-dotted-line'></div>
        </>
    )
}

export default PanelDotted;