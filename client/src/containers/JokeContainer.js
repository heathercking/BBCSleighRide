import React, {useState, useEffect} from "react";
import Joke from "../components/Joke";
import Header from "../components/Header";
import Footer from "../components/Footer";

const JokeContainer = ({joke}) => {
    const [jokes,setJokes] = useState([]);
    const [randomJoke, setRandomJoke] = useState(null);

    const getJokes = function(){
        fetch('https://api.sleighride.com/jokes')
        .then(res => res.json())
        .then(jokes => setJokes(jokes))
    }

    onButtonClick = function (joke){
        setRandomJoke(joke)
    }



    return (
        <>
        <Header/>
        <Joke onButtonClick = {onButtonClick} jokes = {jokes}/>
        <Footer />
        </>
    )
}

export default JokeContainer;