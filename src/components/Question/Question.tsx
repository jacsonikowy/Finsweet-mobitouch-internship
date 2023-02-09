import React from 'react'

import './Question.scss';

import Plus from '../../assets/icons/plus.png';


interface QuestionProps extends React.HTMLAttributes<HTMLButtonElement> {
    number: string,
    question: string,
    answer: string,
}


const Question: React.FC<QuestionProps> = ({number,question,answer, ...props}) => {

    const [active, setActive] = React.useState<boolean>(false);

    const showAnswer = () => {
        setActive(!active)
        console.log('test')
    }
    

    return (
        <div className='question'>
            <div className='answer'>
                <h6 className='number'>{number}</h6>
                <h6>{question}</h6>
                <p className={`show ${active ? "active" : ""}`}>{answer}</p>
            </div>
            <img className={`${active ? "activeImg" : ""}`} src={Plus} alt="" onClick={() => showAnswer()}/>
        </div>
    )
}

export default Question