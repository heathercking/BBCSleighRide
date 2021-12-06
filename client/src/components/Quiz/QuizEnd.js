import react from 'react';

import QuizScore from './QuizScore';

const QuizEnd = ({questionsRemaining, score})  => {
    return (
         <div className="end-of-quiz">
            <h2>You have finished the quiz hooray!</h2>
            <QuizScore score = {score}/>
            <button>Play Again</button>
            <button>Exit</button>
        </div>
    )
}

export default QuizEnd;