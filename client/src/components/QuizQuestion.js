import React from "react";

const QuizQuestion = ({question, correct, options, key, shuffleArray}) => {

    const randomOptions = shuffleArray(options);

    return (
        <div className="quiz-question">
            <h4>{question}</h4>
            <p>{correct}</p>
            <ul>
                <li>{randomOptions[0]}</li>
                <li>{randomOptions[1]}</li>
                <li>{randomOptions[2]}</li>
            </ul>
            <button>Next</button>
            <button>Exit</button>
        </div>
    )
}

export default QuizQuestion;