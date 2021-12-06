import React, {useState, useEffect} from "react";

import Map from "../components/Map";
import Header from "../components/Header";
// import Quiz from "../components/Quiz/QuizContainer";
import Joke from "../components/Joke";
import Footer from "../components/Footer";
import MapContainer from "./MapContainer";
import { getQuestions } from "../services/SleighRideService";
import {useNavigate} from 'react-router-dom';
import quizCracker from '../assets/images/christmas_cracker_quiz.svg';
import jokeCracker from '../assets/images/christmas_cracker_joke.svg';
import mapCracker from '../assets/images/christmas_cracker.svg';
import '../styles/BBCSleighRide.css';



const BBCSleighRide = () => {

  let navQuiz = useNavigate();
  function handleQuizClick() {
    navQuiz('/quiz');
  }

  let navJoke = useNavigate();
  function handleJokeClick() {
    navJoke('/joke');
  }

  let navMap = useNavigate();
  function handleMapClick() {
    navJoke('/map');
  }

    return (
        <>
        {/* <Map/>
        <Quiz/>
        <Joke />
        <Footer /> */}
        {/* <Header/> */}
        {/* <MapContainer/> */}
        <img className="cracker" src={quizCracker} alt="Quiz" onClick={handleQuizClick}/>
        <img className="cracker" src={mapCracker} alt="Joke" onClick={handleMapClick}/>
        <img className="cracker" src={jokeCracker} alt="Joke" onClick={handleJokeClick}/>

        {/* <Quiz questions = {questions} score = {score} remainingGuesses = {remainingGuesses} removeQuizQuestion = {removeQuizQuestion} updateScore = {updateScore}/> */}
        {/* <Joke /> */}
        {/* <Footer /> */}
        </>
    )
}

export default BBCSleighRide;