import React from "react";
import QuizQuestion from "./QuizQuestion";
import QuizWelcome from './QuizWelcome'
import QuizEnd from './QuizEnd'

const Quiz = ({questions, score, removeQuizQuestion, updateScore, onAnswerCheck, quizAnswerIsCorrect}) => {

    const questionsRemaining = questions.length;

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
            <QuizQuestion questions = {questions} question = {question} score = {score} removeQuizQuestion = {removeQuizQuestion} updateScore = {updateScore} shuffleArray = {shuffleArray} onAnswerCheck = {onAnswerCheck}/>
        )
    })
    return (
        <>
        <QuizWelcome/> 
        {nodeItems.splice(0, 1)}
        {questionsRemaining == 0 ? <QuizEnd /> : null}
        </>
    )
}

export default Quiz;