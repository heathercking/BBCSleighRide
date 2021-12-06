import react from 'react';
import {useNavigate} from 'react-router-dom';
import QuizScore from './QuizScore';

const QuizEnd = ({questionsRemaining, score})  => {

    let navigate = useNavigate();

    const handleExit = () => {
        navigate('/')
    }
    return (
         <div className="end-of-quiz">
            <h2>You have finished the quiz hooray!</h2>
            <QuizScore score = {score}/>
            <button >Play Again</button>
            <button onClick={handleExit}>Exit</button>
        </div>
    )
}

export default QuizEnd;