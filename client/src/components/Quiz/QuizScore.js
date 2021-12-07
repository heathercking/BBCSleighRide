import react from 'react';

const QuizScore = ({score}) => {

    const percentage = Math.floor((score.correctQuestions/score.totalQuestions) * 100);

    return (
        // <p>hello!</p>
        <div className="score-wrapper">
            <p>Well done you have made it through the quiz and Buddy still had candy canes left. Hurray!</p>
            {score.correctQuestions == 1 ?<p>You earned {score.correctQuestions} present</p> : <p>You earned {score.correctQuestions} presents</p>}
            <p>You got {score.correctQuestions} questions correct out of {score.totalQuestions} </p>
            <p>That is {percentage}%</p>
        </div>
    )
}

export default QuizScore;