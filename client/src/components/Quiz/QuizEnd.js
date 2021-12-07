import react from 'react';
import {useNavigate} from 'react-router-dom';
import QuizScore from './QuizScore';

const QuizEnd = ({questionsRemaining, updateScore, replayQuiz, score})  => {

    let navigate = useNavigate();

    const handleReplay = () => {
        updateScore(0, 0, 0);
        replayQuiz()
    }

    const handleExit = () => {
        updateScore(0, 0, 0);
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