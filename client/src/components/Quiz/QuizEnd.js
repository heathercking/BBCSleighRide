import react from 'react';
import {useNavigate} from 'react-router-dom';
import QuizScore from './QuizScore';
import quizElf from '../../assets/images/elf_happy.svg';
import replayCracker from '../../assets/images/christmas_cracker_replay.svg';
import exitCracker from '../../assets/images/christmas_cracker_exit.svg';

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
            <div className="quiz-score-container">
                <QuizScore score = {score}/>
                <img className="quiz-welcome-elf" src={quizElf} alt="Christmas elf for page load"/>
            </div>
            <div className="quiz-end-cracker-container">
                <img className="quiz-end-cracker" src={replayCracker}  alt="Christmas elf for page load" onClick = {handleReplay} />
                <img className="quiz-end-cracker" src={exitCracker} alt="Christmas elf for page load" onClick={handleExit}/>
            </div>
        </div>
    )
}

export default QuizEnd;