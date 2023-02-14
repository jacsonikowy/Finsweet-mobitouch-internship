import React from 'react'

import './Question.scss';

import Plus from '../../assets/icons/plus.png';


interface QuestionProps extends React.HTMLAttributes<HTMLButtonElement> {
    number: string,
    question: string,
    answer: string,
}


const Question: React.FC<QuestionProps> = ({number,question,answer, ...props}) => {

    const [active, setActive] = React.useState(false);

    const showAnswer = () => {
        setActive(!active)
        console.log('test')
    }
    

    return (
        <div className='question'>
            <div className='answer'>
                <div className="question-answer-text">
                    <div className="question-answer-text-2">
                        <p className='number'>{number}</p>
                        <p className='question-question'>{question}</p>
                    </div>
                <img className={`${active ? "activeImg" : ""}`} src={Plus} alt="" onClick={() => showAnswer()}/>
                </div>
                <p className={`show body1 ${active ? "active" : ""}`}>{answer}</p>
            </div>
        </div>
    )
}

export default Question