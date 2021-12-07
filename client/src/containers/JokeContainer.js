import React, {useState, useEffect} from "react";
import Joke from "../components/Joke";
import { getJokes } from '../services/SleighRideService';
import '../css/JokeContainer.css'
import cracker_exit from '../assets/images/christmas_cracker_exit.svg';

const JokeContainer = ({joke}) => {
    const [jokes,setJokes] = useState([]);
    const [randomJoke, setRandomJoke] = useState(null);
    const [toggleJoke, setToggleJoke] = useState(false);
    const [jokeTally, setJokeTally] = useState(0);

    useEffect(() => {
      getJokes()
      .then(data => {
          setJokes(data)
      })
  }, [toggleJoke,jokeTally])

    const shuffleArray = (array) => {
      let currentIndex = array.length, randomIndex;

      while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
      }

    const shuffledJokes = shuffleArray(jokes).splice(-1);

    const handleClick = (event) => {
      setToggleJoke(true)
      setJokeTally(jokeTally + 1)
    }

const nodeItems = shuffledJokes.map(joke => {

        return (
            <Joke joke={joke} />
        )
    })


    return (
        <>
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Welcome to the joke generator</h2>
              <div className="modal-body">
                {nodeItems}
                  <p>Click the button below for a new joke</p>
                  <button onClick={handleClick}>HoHoHo</button>
              </div>
              <div className="modal-footer">
                <img src={cracker_exit} alt="Exit" className="button" />
              </div>
            </div>
          </div>
        </div>

        </>
    )
}

export default JokeContainer;
