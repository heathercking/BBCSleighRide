import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom'
import { BsFillCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';


const QuizQuestion = ({question, shuffleArray, onAnswerCheck}) => {


    const [quizAnswerIsCorrect, setQuizAnswerIsCorrect] = useState(true);
    
    useEffect(() => {
        getRandomOptions(question.options)
        
    }, [])

    function getRandomOptions(options) {
        shuffleArray(options)
    }

    const handleClick = (event) => {
        console.log(event.target.innerHTML)
        if (event.target.innerHTML == question.correct) {
            console.log("Hurray")
            setQuizAnswerIsCorrect(true);
            console.log(quizAnswerIsCorrect)
        } else {
            setQuizAnswerIsCorrect(false);
        }
    }

    return (
        <div className="quiz-question">
            <h4>{question.question}</h4>
            <p>{question.correct}</p>
            <ul>
                <li className="quiz-question-option quiz-option1" onClick = {handleClick}>{question.options[0]}</li>
                <li className="quiz-question-option quiz-option1" onClick = {handleClick}>{question.options[1]}</li>
                <li className="quiz-question-option quiz-option3" onClick = {handleClick}>{question.options[2]}</li>
            </ul>
            <button>Next</button>
            <button>Exit</button>

        <BsFillCheckCircleFill  style={{display: quizAnswerIsCorrect ? 'block' : 'none'}}></BsFillCheckCircleFill>
        <BsFillXCircleFill  style={{display: quizAnswerIsCorrect == false ? 'block' : 'none'}}></BsFillXCircleFill>
          
        </div>
    )
}

export default QuizQuestion;