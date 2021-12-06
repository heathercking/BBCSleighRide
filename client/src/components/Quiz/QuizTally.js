import react, {useState} from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import candy_cane from '../../assets/images/candy_cane.svg';
import '../../App.css';

const QuizTally = ({remainingGuesses, candyCanes}) => {

    const [inProp, setInProp] = useState(true);

  return (
    <>
    <CSSTransition timeout={700} classNames="item">
    <button type="button" onClick={() => setInProp(false)}>
        Click to Enter
      </button>
      </CSSTransition>
    </>
  );
}

export default QuizTally;