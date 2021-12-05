import react from 'react';

const QuizScore = ({score}) => {

    const percentage = (score.correctQuestions/score.totalQuestions) * 100;

    return (
        // <p>hello!</p>
        <div className="score-wrapper">
            <p>You got {score.correctQuestions} questions correct out of {score.totalQuestions} </p>
            <p>That is {percentage}% well done you! Look out for presents!</p>
        </div>
    )
}

export default QuizScore;