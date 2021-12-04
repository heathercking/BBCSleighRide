import React from "react";
import QuizQuestion from "./QuizQuestion";

const Quiz = ({questions}) => {

    const nodeItems = questions.map(question => {
        return (
            <QuizQuestion question = {question.question}/>
        )
    })

    return (
        <>
        <p>I am the quiz</p>
        {nodeItems}
        </>
    )
}

export default Quiz;