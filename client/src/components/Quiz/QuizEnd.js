import react from 'react';
import {useNavigate} from 'react-router-dom';
import QuizScore from './QuizScore';

const QuizEnd = ({questionsRemaining, replayQuiz, score})  => {

    let navigate = useNavigate();

    const handleReplay = () => {
        replayQuiz()
    }

    const handleExit = () => {
        navigate('/')
    }
    return (
         <div className="end-of-quiz">
            <h2>You have finished the quiz hooray!</h2>
            <QuizScore score = {score}/>
            <button onClick = {handleReplay}>Play Again</button>
            <button onClick={handleExit}>Exit</button>
        </div>
    )
}

export default QuizEnd;