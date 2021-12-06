import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom'
import { BsFillCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';
import {useNavigate} from 'react-router-dom';
import {nextQuestion} from '../../services/QuizLogic'
import QuizTally from './QuizTally'
import candy_cane from '../../assets/images/candy_cane.svg';
import cracker_next from '../../assets/images/christmas_cracker_next.svg';
import cracker_exit from '../../assets/images/christmas_cracker_exit.svg';


const QuizQuestion = ({questions, question, score, answeredQuestions, removeQuizQuestion, replayQuiz, updateScore, shuffleArray, onAnswerCheck}) => {


    const [quizAnswerIsCorrect, setQuizAnswerIsCorrect] = useState(null);
    const [remainingGuesses, setRemainingGuesses] = useState(5);
    const [index, setIndex] = useState(0);
    let navigate = useNavigate();

    const candyCanes = [...Array(5)].map((e, i) => <img src={candy_cane} alt="candy cane image" className = "candy-cane-quiz-lives"/>)

    // useEffect(() => {
    //     getRandomOptions(question.options)
    // }, [])

    // function getRandomOptions(options) {
    //     shuffleArray(options)
    // }

    const removeSelectedAnswer = () => {
        const elsF =document.getElementsByClassName("selected-false");
            while (elsF[0]) {
                elsF[0].classList.remove("selected-false")
            }
        const elsT =document.getElementsByClassName("selected-true");
            while (elsT[0]) {
                elsT[0].classList.remove("selected-true")
            }
    }

    const handleClick = (event) => {
        const selectedElement = event.target;
        removeSelectedAnswer()
        if (event.target.innerHTML == question.correct) {
            setQuizAnswerIsCorrect(true);
            selectedElement.classList.add("selected-true");
        } else {
            setQuizAnswerIsCorrect(false);
            setRemainingGuesses(remainingGuesses -1)
            document.getElementsByClassName("candy-cane-quiz-lives")[0].className = "hidden-candy";
            selectedElement.classList.add("selected-false");
        }
    }

    const handleNext = (event) => {
        const newTotal = 0
        removeSelectedAnswer()
        if (quizAnswerIsCorrect) {
            updateScore(score.correctQuestions + 1, score.incorrectQuestions, score.totalQuestions + 1)
        } else {
            updateScore(score.correctQuestions, score.incorrectQuestions + 1, score.totalQuestions + 1)
        }

        setQuizAnswerIsCorrect(null);
        removeQuizQuestion(question)
    }
    
    function handleExit() {
        navigate('/');
    }

    const handleReplay = (event) => {
        replayQuiz()
    }
 

    if (remainingGuesses) {
        return (
            <>
            <div className="candy-canes">
                {candyCanes}
            </div>
            <div className="quiz-question">
                {/* <BsFillCheckCircleFill  style={{display: quizAnswerIsCorrect ? 'block' : 'none'}}></BsFillCheckCircleFill>
                <BsFillXCircleFill  style={{display: quizAnswerIsCorrect == false ? 'block' : 'none'}}></BsFillXCircleFill> */}
                <h4>{question.question}</h4>
                
                {/* <p>{question.correct}</p> */}
                <ul>
                    <li className="quiz-question-option quiz-option1" onClick = {handleClick}>{question.options[0]}</li>
                    <li className="quiz-question-option quiz-option1" onClick = {handleClick}>{question.options[1]}</li>
                    <li className="quiz-question-option quiz-option3" onClick = {handleClick}>{question.options[2]}</li>
                </ul>
            </div>
            <div className="quiz-cracker-wrapper">
                    <img className="quiz-question-nav-crackers" src={cracker_next} alt="Cracker button to symbolise next" onClick = {handleExit}></img>
                    <img className="quiz-question-nav-crackers" src={cracker_exit} alt="Cracker button to symbolise exit" onClick = {handleExit}></img>
                </div>
            </>
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
                <button onClick = {handleReplay}>
                    play again
                </button>
            </div>
        )
    }
}

export default QuizQuestion;