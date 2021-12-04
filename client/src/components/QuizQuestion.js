import React from "react";

const QuizQuestion = ({question, correct, incorrect, key}) => {

    return (
        <div className="quiz-question">
            <h4>{question}</h4>
            <p>{correct}</p>
            <p>{incorrect}</p>
            <button>Next</button>
            <button>Exit</button>
        </div>
    )
}

export default QuizQuestion;