import React from 'react'
import Question from '../../../components/Question/Question'

import './FAQ.scss'

const questions = [
    {
        number: '01',
        question: 'How much time does it take?',
    },
    {
        number: '02',
        question: 'What is your class naming convention?',
    },
    {
        number: '03',
        question: 'How do you communicate?',
    },
    {
        number: '04',
        question: 'I have a bigger project. Can you handle it?',
    },
    {
        number: '05',
        question: 'What is your class naming convention?'
    }
]

const renderQuestions = () => {
    return questions.map(question => {
        return <Question number={question.number} question={question.question} answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
    })
}

const FAQ: React.FC = () => {
    return (
        <div className='FAQ'>
            <div>
                <h3>Frequently Asked Questions</h3>
                <a href="">Contact us for more info</a>
            </div>
            <div className='questions'> 
                {renderQuestions()}
            </div>
        </div>
    )
}

export default FAQ