import react from 'react';
import quizCracker from '../../assets/images/christmas_cracker_quiz.svg';
import quizElf from '../../assets/images/elf_placeholder.svg';

// import '../../css/Quiz.css';

const QuizWelcome = ({onButtonClick}) => {

    const handleClick = () => {
        onButtonClick();
    }


    return (
        <div className="quiz-welcome">
            <h2>Welcome to the Christmas quiz</h2>
            <div className="quiz-welcome-content-wrapper">
                <div className="quiz-welcome-text-wrapper">
                    <p>Buddy the elf loves candy canes, get answers right to help him keep his candy</p>
                    <p className="quiz-welcome-start-instructions">Click the button below to start</p>
                    <img className="quiz-start-svg" src={quizCracker} alt="Christmas cracker image for quiz" onClick={handleClick} />
                </div>
                <img className="quiz-welcome-elf" src={quizElf} alt="Christmas elf for page load"/>
            </div>
        </div>
        
    )
}


export default QuizWelcome