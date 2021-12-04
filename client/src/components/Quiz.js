import React from "react";
import QuizQuestion from "./QuizQuestion";

const Quiz = ({questions, removeQuizQuestion, onAnswerCheck, quizAnswerIsCorrect}) => {

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
            <QuizQuestion questions = {questions} question = {question} removeQuizQuestion = {removeQuizQuestion} shuffleArray = {shuffleArray} onAnswerCheck = {onAnswerCheck}/>
        )
    })
    return (
        <> 
        <h2>Welcome to the Christmas quiz</h2>
        <p>Answer all the questions to be on the nice list</p>
        {nodeItems.splice(0, 1)}
        <div className="end-of-quiz" style={{display: questionsRemaining ? 'none' : 'block'}}>
            <h2>You have finished the quiz hooray!</h2>
            <p></p>
        </div>
        </>
    )
}

export default Quiz;