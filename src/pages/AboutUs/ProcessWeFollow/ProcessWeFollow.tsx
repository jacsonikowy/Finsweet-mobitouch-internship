import React from 'react'

import PanelDotted from '../../../components/PanelDotted/PanelDotted'
import circle from '../../../assets/icons/circle.svg'

import './ProcessWeFollow.scss'

const ProcessWeFollow: React.FC = () => {
    return (
        <div className='processwefollow'>
            <h2>The process we follow</h2>
            <div className="processwefollow-panels">
                <PanelDotted className="processwefollow-panel" headingText='Planning' level='h6' description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.' icon={circle} />
                <PanelDotted className="processwefollow-panel" headingText='Planning' level='h6' description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.' icon={circle} />
                <PanelDotted className="processwefollow-panel" headingText='Planning' level='h6' description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.' icon={circle} />
                <PanelDotted className="processwefollow-panel" headingText='Planning' level='h6' description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.' icon={circle} />
            </div>
        </div>
    )
}

export default ProcessWeFollow