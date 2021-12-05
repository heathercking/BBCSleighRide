import React, {useState, useEffect} from "react";
import Map from "../components/Map";
import Header from "../components/Header";
// import Quiz from "../components/Quiz/QuizContainer";
import Joke from "../components/Joke";
import Footer from "../components/Footer";
import { getQuestions } from "../services/SleighRideService";


const BBCSleighRide = () => {

    
    return (
        <>
          <p>This is the homepage</p>
        {/* <Map/>
        <Quiz/>
        <Joke />
        <Footer /> */}
        {/* <Header/> */}
        {/* <Map/> */}
        {/* <Quiz questions = {questions} score = {score} remainingGuesses = {remainingGuesses} removeQuizQuestion = {removeQuizQuestion} updateScore = {updateScore}/> */}
        {/* <Joke /> */}
        {/* <Footer /> */}
        </>
    )
}

export default BBCSleighRide;