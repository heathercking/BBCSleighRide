import React, {useState, useEffect} from "react";
import QuizQuestion from "../components/Quiz/QuizQuestion";
import QuizWelcome from '../components/Quiz/QuizWelcome'
import QuizEnd from '../components/Quiz/QuizEnd'
import {getQuestions} from '../services/SleighRideService'
import { ComposableMap } from "react-simple-maps";
import '../css/Quiz.css';


const QuizContainer = ({onAnswerCheck, quizAnswerIsCorrect}) => {


    const [questions, setQuestions] = useState([]);
    const [readyToPlay, setReadyToPlay] = useState(false)
    const [correctQuestions, setCorrectQuestions] = useState(0);
    var [score, setScore] = useState({
                                                correctQuestions: 0,
                                                incorrectQuestions: 0,
                                                totalQuestions: 0
    });

    // const [remainingGuesses, setRemainingGuesses] = useState(5);

    const questionsRemaining = questions.length;
    

    useEffect(() => {
        getQuestions()
        .then(data => {
            setQuestions(data)
        })
    }, [])


    const addCorrectQuestions = () => {
        setCorrectQuestions(correctQuestions +1)
    }

    const updateScore = (correct, incorrect, total) => {
        setScore((previousObjectState) => {
                return {
                    ...previousObjectState,
                    correctQuestions: correct,
                    incorrectQuestions: incorrect,
                    totalQuestions: total,
                }
            })
    }


    const removeQuizQuestion = (question) => {
        let temp = questions.map(question => question);
        const indexToDelete = questions.map(questions => questions._id).indexOf(question._id);
        temp.splice(indexToDelete, 1);
        setQuestions(temp);
        // console.log(temp)
    }

    // const removePlayerGuesses = () => {
    //     Console.log("removing guesses")
    // }

    const shuffleArray = (array) => {
        let currentIndex = array.length, randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
        }

    const shuffledQuestions = shuffleArray(questions);
        const onButtonClick =  () => {
            setReadyToPlay(true)
        }

    const replayQuiz = () => {
        setReadyToPlay(false)
        setCorrectQuestions(0)
        getQuestions()
        .then(data => {
            setQuestions(data)
        })
    }

    const nodeItems = shuffledQuestions.map(question => {
        return (
            <QuizQuestion questions = {questions} question = {question} score = {score} removeQuizQuestion = {removeQuizQuestion} updateScore = {updateScore} shuffleArray = {shuffleArray} replayQuiz = {replayQuiz} onAnswerCheck = {onAnswerCheck} correctQuestions = {correctQuestions} addCorrectQuestions = {addCorrectQuestions}/>
        )
    })
    return (
        <div className="quiz-container">
            {/* <p>hello</p> */}
            {!readyToPlay ? <QuizWelcome onButtonClick = {onButtonClick}/> : null}
            {readyToPlay ? <div>
            {nodeItems.splice(0, 1)}
            {questionsRemaining == 0 ? <QuizEnd  score = {score} updateScore = {updateScore} replayQuiz = {replayQuiz}/> : null}
            </div>: null}
        </div>
    )
}

export default QuizContainer;