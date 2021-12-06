import React, {useState, useEffect} from "react";
import QuizQuestion from "../components/Quiz/QuizQuestion";
import QuizWelcome from '../components/Quiz/QuizWelcome'
import QuizEnd from '../components/Quiz/QuizEnd'
import {getQuestions} from '../services/SleighRideService'

const QuizContainer = ({onAnswerCheck, quizAnswerIsCorrect}) => {


    const [questions, setQuestions] = useState([]);
    var [score, setScore] = useState({
                                                correctQuestions: 0,
                                                incorrectQuestions: 0,
                                                totalQuestions: 0
    });

    const [remainingGuesses, setRemainingGuesses] = useState(5);

    const questionsRemaining = questions.length;

    useEffect(() => {
        getQuestions()
        .then(data => {
            setQuestions(data)
        })
    }, [])


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


    const nodeItems = shuffledQuestions.map(question => {
        return (
            <QuizQuestion questions = {questions} question = {question} score = {score} remainingGuesses = {remainingGuesses} removeQuizQuestion = {removeQuizQuestion} updateScore = {updateScore} shuffleArray = {shuffleArray} onAnswerCheck = {onAnswerCheck}/>
        )
    })
    return (
        <>
        {/* <p>hello</p> */}
        <QuizWelcome/>
        {nodeItems.splice(0, 1)}
        {questionsRemaining == 0 ? <QuizEnd score = {score}/> : null}
        </>
    )
}

export default QuizContainer;