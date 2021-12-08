import React from "react"; 
import "../css/Joke.css";

const Joke = ({joke}) => {


    return (
    <div className="joke-card">
        <div className = "joke-title">{joke.joke}
            <p className = "punchline">{joke.punchline}</p>
        </div>
    </div>
    )}
 
export default Joke;
