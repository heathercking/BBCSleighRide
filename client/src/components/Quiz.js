import React from "react";
import QuizQuestion from "./QuizQuestion";

const Quiz = ({questions, onAnswerCheck, quizAnswerIsCorrect}) => {

    let answeredQuestions = [];
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

    const unansweredQuestions = shuffledQuestions.filter(question => !answeredQuestions);
    
    
    
    const nodeItems = unansweredQuestions.map(question => {
        return (
            <QuizQuestion questions = {questions} question = {question} answeredQuestions = {answeredQuestions} shuffleArray = {shuffleArray} onAnswerCheck = {onAnswerCheck}/>
        )
    })

    return (
        <> 
        <h2>Welcome to the Christmas quiz</h2>
        <p>Answer all the questions to be on the nice list</p>
        {nodeItems.splice(0, 1)}
        </>
    )
}

export default Quiz;