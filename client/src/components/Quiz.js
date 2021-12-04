import React from "react";
import QuizQuestion from "./QuizQuestion";

const Quiz = ({questions}) => {

    function shuffleArray(array) {
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
            <QuizQuestion question = {question.question} correct = {question.correct} incorrect = {[question.options[0], question.options[1], question.options[2]]} key= {question._id}/>
        )
    })

    return (
        <>
        <h2>Welcome to the Christmas quiz</h2>
        <p>Answer all the questions to be on the nice list</p>
        {nodeItems}
        </>
    )
}

export default Quiz;