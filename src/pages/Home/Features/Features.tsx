import React from 'react';

import Panel from '../../../components/Panel/Panel'

import './Features.scss'

import Icon1 from '../../../assets/icons/Icon.svg'
import Icon2 from '../../../assets/icons/Icon(1).svg'
import Icon3 from '../../../assets/icons/Icon(2).svg'
import Icon4 from '../../../assets/icons/Icon(3).svg'
import Icon5 from '../../../assets/icons/Icon(4).svg'
import Icon6 from '../../../assets/icons/Icon(5).svg'

const Panels = [
    {
        icon: Icon1,
        headingText: "Uses Client First",
    },
    {
        icon: Icon2,
        headingText: "Two Free Revision Round",
    },
    {
        icon: Icon3,
        headingText: "Template Customization",
    },
    {
        icon: Icon4,
        headingText: "24/7 Support",
    },
    {
        icon: Icon5,
        headingText: "Quick Delivery",
    },
    {
        icon: Icon6,
        headingText: "Hands-on approach",
    }
]


const renderPanels = () => {
    return Panels.map(panel => {
        return <Panel className="padding" icon={panel.icon} level='h5' headingText={panel.headingText} description='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ' />
    }) 
}

const Features:React.FC = () => {
    return (
        <div className='features'>
            <div className='headings'>
                <h5>Features</h5>
                <h1>Design that solves problems, one product at a time</h1>
            </div>
            <div className='panelsGrid'>
                {renderPanels()}
            </div>
        </div>
    )
}

export default Features