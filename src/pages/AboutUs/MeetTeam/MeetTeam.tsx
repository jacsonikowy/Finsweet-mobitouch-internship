import React from 'react'

import './MeetTeam.scss'

import TeamMember, { TeamMemberProps } from '../../../components/TeamMember/TeamMember'

import FirstMember from '../../../assets/images/maninblacksuite.png'
import SecondMember from '../../../assets/images/seriousman.png'
import ThirdMember from '../../../assets/images/maninwhiteshirt.png'
import FourthMember from '../../../assets/images/transgender.png'

type ArrayMembersProps = Array<TeamMemberProps>

const ArrayMembers: ArrayMembersProps = [
    {
        img: FirstMember,
        name: 'John Smith',
        title: 'CEO'
    },
    {
        img: SecondMember,
        name: 'Simon Adams',
        title: 'CTO'
    },
    {
        img: ThirdMember,
        name: 'Paul Jones',
        title: 'Design Lead'
    },{
        img: FourthMember,
        name: 'Sara Hardin',
        title: 'Project Manager'
    }
]

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