import React from 'react'
import Question from '../../../components/Question/Question'

import './FAQ.scss'
import { questions, questionProps } from '../../../utils/questionData'


const renderQuestions = () => {
    return questions.map((question: questionProps) => {
        return <Question number={question.number} question={question.question} answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
    })
}

const FAQ: React.FC = () => {
    return (
        <div className='FAQ'>
            <div className='FAQ-title'>
                <h3>Frequently Asked Questions</h3>
                <a href="#index">Contact us for more info</a>
            </div>
            <div className='questions'> 
                {renderQuestions()}
            </div>
        </div>
    )
}

export default FAQ