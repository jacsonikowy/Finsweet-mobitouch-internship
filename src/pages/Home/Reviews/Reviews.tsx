import React from 'react';
import './Reviews.scss'

import TextBlock from '../../../components/TextBlock/TextBlock'

import Woman from '../../../assets/images/woman.png'

import Opinion from '../../../components/Opinion/Opinion'

interface Example {
    avatar: string,
    text: string,
    title: string,
    fullname: string,
}

const Jenny: Example = {
    avatar: Woman,
    text: "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.",
    title: "Vice President",
    fullname: "Jenny Wilson",
}

const Reviews: React.FC = () => {
    return (
        <div className="reviews">
            <div className='reviewBlock'>
                <TextBlock className="textblockOpinion" level='h3' headingText='What our clients say about us' description="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed." />
                <Opinion className="reviewBlock-opinion" avatar={Jenny.avatar} text={Jenny.text} title={Jenny.title} fullname={Jenny.fullname} />
            </div>
        </div>
    )
}

export default Reviews