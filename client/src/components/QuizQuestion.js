import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom'
import { BsFillCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';
import {nextQuestion} from '../services/QuizLogic'


const QuizQuestion = ({questions, question, answeredQuestions, removeQuizQuestion, shuffleArray, onAnswerCheck}) => {


    const [quizAnswerIsCorrect, setQuizAnswerIsCorrect] = useState(null);
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let totalQuestions = 0;

    
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

    const handleNext = (event) => {
        console.log(event.target.innerHTML)
        // updateScore(correctAnswers, incorrectAnswers, totalQuestions)
        totalQuestions ++;
        console.log(totalQuestions)
        setQuizAnswerIsCorrect(null);
        removeQuizQuestion(question)
        // window.location.reload(false)

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
            <button onClick = {handleNext}>Next</button>
            <button>Exit</button>

        <BsFillCheckCircleFill  style={{display: quizAnswerIsCorrect ? 'block' : 'none'}}></BsFillCheckCircleFill>
        <BsFillXCircleFill  style={{display: quizAnswerIsCorrect == false ? 'block' : 'none'}}></BsFillXCircleFill>
          
        </div>
    )
}

export default QuizQuestion;