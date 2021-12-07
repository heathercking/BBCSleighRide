import React, {useState, useEffect} from "react";
import Joke from "../components/Joke";
import { getJokes } from '../services/SleighRideService';

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
        <h2>Welcome to the joke generator</h2>
        {nodeItems}
          <p>Click the button below for a new joke</p>
          <button onClick={handleClick}>HoHoHo</button>
        
        </>
    )
}

export default JokeContainer;
