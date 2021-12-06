import React from "react"; 

const Joke = ({jokes, onButtonClick}) => {
    const handleClick = function(){
        onButtonClick(jokes);
    }

    return <button onClick={handleClick}>Make Me Laugh</button>

}

export default Joke;