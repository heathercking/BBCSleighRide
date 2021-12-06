import react from 'react';
import candy_cane from '../../assets/images/candy_cane.svg';

const QuizTally = ({remainingGuesses}) => {

    return (
          <img src={candy_cane} alt="candy cane image" className = "candy-cane-quiz-lives"/>
    )
}

export default QuizTally;