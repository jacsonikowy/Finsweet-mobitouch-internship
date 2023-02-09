import React from 'react'
import BlogPost from '../../../components/BlogPost/BlogPost'

import './Blog.scss'

import WomanWhiteSleeves from '../../../assets/images/womanWhiteSleeves.png'
import AppleMonitors from '../../../assets/images/appleMonitors.png'
import ArabicBusinessman from '../../../assets/images/arabicBusinessman.png'

const Blog:React.FC = () => {
    return (
        <div className='ourblog'>
            <h1>Our Blog</h1>
            <div className='blogposts'>
                <BlogPost photo={WomanWhiteSleeves} date="19 Jan 2022" title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" description='See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract' />
                <BlogPost photo={AppleMonitors} date="19 Jan 2022" title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" description='See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract' />
                <BlogPost photo={ArabicBusinessman} date="19 Jan 2022" title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" description='See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract' />
            </div>
        </div>
    )
}

export default Blog