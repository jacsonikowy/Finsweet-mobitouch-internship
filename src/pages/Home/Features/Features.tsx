import React from 'react';

import Panel from '../../../components/Panel/Panel'

import './Features.scss'
import { ReactComponent as MyIcon } from'../../../assets/icons/Icon.svg'  
import { ReactComponent as MyIcon2 } from'../../../assets/icons/Icon(1).svg'  
import { ReactComponent as MyIcon3 } from'../../../assets/icons/Icon(2).svg'  
import { ReactComponent as MyIcon4 } from'../../../assets/icons/Icon(3).svg'  
import { ReactComponent as MyIcon5 } from'../../../assets/icons/Icon(4).svg'  
import { ReactComponent as MyIcon6 } from'../../../assets/icons/Icon(5).svg'  

const Panels = [
    {
        icon: <MyIcon />,
        headingText: "Uses Client First",
    },
    {
        icon: <MyIcon2 />,
        headingText: "Two Free Revision Round",
    },
    {
        icon: <MyIcon3 />,
        headingText: "Template Customization",
    },
    {
        icon: <MyIcon4 />,
        headingText: "24/7 Support",
    },
    {
        icon: <MyIcon5 />,
        headingText: "Quick Delivery",
    },
    {
        icon: <MyIcon6 />,
        headingText: "Hands-on approach",
    }
]


const renderPanels = () => {
    return Panels.map(panel => {
        return <Panel className="padding" icon={panel.icon} level='h6' headingText={panel.headingText} description='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ' />
    }) 
}

const Features:React.FC = () => {
    return (
        <div className='features'>
            <div className='headings'>
                <p className='body2'>Features</p>
                <h1>Design that solves problems, one product at a time</h1>
            </div>
            <div className='panelsGrid'>
                {renderPanels()}
            </div>
        </div>
    )
}

export default Features