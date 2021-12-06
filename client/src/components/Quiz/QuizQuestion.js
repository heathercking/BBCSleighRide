import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom'
import { BsFillCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';
import {nextQuestion} from '../../services/QuizLogic'
import QuizTally from './QuizTally'


const QuizQuestion = ({questions, question, score, remainingGuesses, answeredQuestions, removeQuizQuestion, updateScore, shuffleArray, onAnswerCheck}) => {


    const [quizAnswerIsCorrect, setQuizAnswerIsCorrect] = useState(null);
    const [remainingGuesses, setRemainingGuesses] = useState(5);
    const [index, setIndex] = useState(0);

    const candyCanes = [...Array(5)].map((e, i) => <img src={candy_cane} alt="candy cane image" className = "candy-cane-quiz-lives"/>)


    
    useEffect(() => {
        getRandomOptions(question.options)
        
    }, [])

    function getRandomOptions(options) {
        shuffleArray(options)
    }

    const handleClick = (event) => {
        // console.log(event.target.innerHTML)
        if (event.target.innerHTML == question.correct) {
            // console.log("Hurray")
            setQuizAnswerIsCorrect(true);
            // console.log(quizAnswerIsCorrect)
        } else {
            setQuizAnswerIsCorrect(false);
            setRemainingGuesses(remainingGuesses -1)
            document.getElementsByClassName("candy-cane-quiz-lives")[0].className = "hidden-candy";
        }
    }

    const handleNext = (event) => {
        // console.log(event.target.innerHTML)
        // console.log(score)
        const newTotal = 0

        if (quizAnswerIsCorrect) {
            updateScore(score.correctQuestions + 1, score.incorrectQuestions, score.totalQuestions + 1)
        } else {
            updateScore(score.correctQuestions, score.incorrectQuestions + 1, score.totalQuestions + 1)
        }
        
        setQuizAnswerIsCorrect(null);
        removeQuizQuestion(question)
    }

    if (remainingGuesses) {
        return (
            <div className="quiz-question">
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
        
    } else {
        return (
            <div className="lose-screen">
                <h4>
                    Oh no, you have run out of candies.
                </h4>
                <p>
                    Click the cracker below to get more!
                </p>
                <button>
                    play again
                </button>
            </div>
        )

    }

    
}

export default QuizQuestion;