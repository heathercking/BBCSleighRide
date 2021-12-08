import React from "react"; 
import "../css/Joke.css";

const Joke = ({joke, toggleJoke}) => {
    return (
    <div className="joke-card">
        <div className = "joke-title">{joke.joke}
            {toggleJoke ? <p className = "punchline-animation punchline-visible" id = "joke-punchline-id">{joke.punchline}</p>: null}
        </div>
    </div>
    )}
 
export default Joke;
