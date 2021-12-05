import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom'
import { BsFillCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';
import {nextQuestion} from '../../services/QuizLogic'
import candy_cane from '../../images/candy_cane.svg'
import QuizTally from './QuizTally'


const QuizQuestion = ({questions, question, score, remainingGuesses, answeredQuestions, removePlayerGuesses, removeQuizQuestion, updateScore, shuffleArray, onAnswerCheck}) => {


    const [quizAnswerIsCorrect, setQuizAnswerIsCorrect] = useState(null);

     const candyCanes = [...Array(remainingGuesses)].map((e, i) => <img src={candy_cane} alt="candy cane image" className = "candy-cane-quiz-lives"/>)
    

    useEffect(() => {
        getRandomOptions(question.options)
    }, [])

    function getRandomOptions(options) {
        shuffleArray(options)
    }

    const handleClick = (event) => {
        if (event.target.innerHTML == question.correct) {
            setQuizAnswerIsCorrect(true);
        } else {
            setQuizAnswerIsCorrect(false);
        }
    }

    const handleNext = (event) => {
        const newTotal = 0
        if (quizAnswerIsCorrect) {
            updateScore(score.correctQuestions + 1, score.incorrectQuestions, score.totalQuestions + 1)
        } else {
            removePlayerGuesses()
            updateScore(score.correctQuestions, score.incorrectQuestions + 1, score.totalQuestions + 1)
        }
        setQuizAnswerIsCorrect(null);
        removeQuizQuestion(question)
    }

    return (
        <div className="quiz-question">
            {candyCanes}
            <h4>{question.question}</h4>
            <QuizTally remainingGuesses = {remainingGuesses} />
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