import react from 'react';

const QuizEnd = ({questionsRemaining})  => {
    return (
         <div className="end-of-quiz" style={{display: questionsRemaining ? 'none' : 'block'}}>
            <h2>You have finished the quiz hooray!</h2>
            <p></p>
        </div>
    )
}

export default QuizEnd;