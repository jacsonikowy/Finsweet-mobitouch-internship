import React from 'react'

import TeamMember from '../../../components/TeamMember/TeamMember'

import './MeetTeam.scss'

import { ArrayMembers } from '../../../utils/teamMembers'

const MeetTeam: React.FC = () => {
    return (
        <div className="meetteam">
            <h2>Meet Our Team</h2>
            <div className="meetteam-teammembers">
                {ArrayMembers.map(member => {
                    return <TeamMember img={member.img} name={member.name} title={member.title} />
                })}
            </div>
        </div>
    )
}

export default MeetTeam