import React from "react";
import ReactDOM from 'react-dom'
import { BsFillCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';




const QuizQuestion = ({question, correct, options, key, shuffleArray}) => {

    const randomOptions = shuffleArray(options);

    return (
        <div className="quiz-question">
            <h4>{question}</h4>
            <p>{correct}</p>
            <ul>
                <li>{randomOptions[0]}</li>
                <li>{randomOptions[1]}</li>
                <li>{randomOptions[2]}</li>
            </ul>
            <button>Next</button>
            <button>Exit</button>
            <BsFillCheckCircleFill/>
            <BsFillXCircleFill />
        </div>
    )
}

export default QuizQuestion;