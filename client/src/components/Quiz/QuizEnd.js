import react from 'react';
import QuizScore from './QuizScore';

const QuizEnd = ({questionsRemaining, score})  => {
    return (
         <div className="end-of-quiz">
            <h2>You have finished the quiz hooray!</h2>
            <QuizScore score = {score}/>
        </div>
    )
}

export default QuizEnd;