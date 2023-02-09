import ButtonArrow from '../../components/ButtonArrow/ButtonArrow'
import React from 'react'

import TextBlock from '../TextBlock/TextBlock'

import './BlogPost.scss'

interface BlogPostProps {
    photo: string,
    date: string,
    title: string,
    description: string,
}

const BlogPost: React.FC<BlogPostProps> = ({photo, date, title, description}) => {
    return (
        <div className='blogpost'>
            <img src={photo} alt="Blog Preview Image" />
            <p>{date}</p>
            <TextBlock level="h6" headingText={title} description={description} />
            <ButtonArrow className="body2" color="black" text='Read More' />
        </div>
    )
}

export default BlogPost