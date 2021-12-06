import react from 'react';
// import '../../css/Quiz.css';

const QuizWelcome = ({onButtonClick}) => {

    const handleClick = () => {
        onButtonClick();
    }


    return (
        <div className="quiz-welcome">
            <h2>Welcome to the Christmas quiz</h2>
            <p>Answer all the questions to be on the nice list</p>
            <button onClick={handleClick}>Enter quiz</button>
        </div>
        
    )
}


export default QuizWelcome