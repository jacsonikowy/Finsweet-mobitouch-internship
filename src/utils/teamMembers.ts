import { TeamMemberProps } from '../components/TeamMember/TeamMember'

import FirstMember from '../assets/images/maninblacksuite.png'
import SecondMember from '../assets/images/seriousman.png'
import ThirdMember from '../assets/images/maninwhiteshirt.png'
import FourthMember from '../assets/images/transgender.png'

export const ArrayMembers: TeamMemberProps[] = [
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
