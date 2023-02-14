import React from 'react'
import './Form.scss'

import TextBlock from '../../../components/TextBlock/TextBlock'
import Button from '../../../components/Button/Button'

const Form: React.FC = () => {
    return (
        <div className="contactus-formdiv">
            <TextBlock className="contactus-formdiv-textblock" headingText='Contact Us' level='h2' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' />
            <form className="contactus-form" action="">
                <p>
                    <label className='body1'>Name</label>
                    <input type="text" placeholder='Enter your name' />
                </p>
                <p>
                    <label>Email</label>
                    <input type="text" placeholder='Enter your email' />
                </p>
                <p>
                    <label>Subject</label>
                    <input type="text" placeholder='Provide context'/>
                </p>
                <p>
                    <label>Subject</label>
                    <input type="text" placeholder='Provide context' />
                </p>
                <p className='message'>
                    <label>Message</label>
                    <textarea></textarea>
                </p>
            </form>
            <Button type='submit' text="Send Message" variant='secondary'/>
        </div>
    )
}

export default Form