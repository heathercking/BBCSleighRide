import React, {useState, useEffect} from "react";

import Map from "../components/Map";
import Header from "../components/Header";
import Quiz from "./QuizContainer";
import Joke from "../components/Joke";
import Footer from "../components/Footer";
import MapContainer from "./MapContainer";
import { getQuestions } from "../services/SleighRideService";
import {useNavigate} from 'react-router-dom';
import quizCracker from '../assets/images/christmas_cracker_quiz.svg';
import jokeCracker from '../assets/images/christmas_cracker_joke.svg';
import mapCracker from '../assets/images/christmas_cracker.svg';
import '../css/BBCSleighRide.css';



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
        <div className="main-section">
          <div className="countdown">
            <h1>Coundown to Christmas....</h1>
          </div>
          <div className="learning-grid">
            <div>
              <img className="cracker-map" src={mapCracker} alt="Map" onClick={handleMapClick}/>
            </div>
            <div>
              <img className="cracker-quiz" src={quizCracker} alt="Quiz" onClick={handleQuizClick}/>
            </div>
          </div> 
            <div className="fun-grid">
              <h2>let it snow</h2>
              <img className="cracker-joke" src={jokeCracker} alt="Joke" onClick={handleJokeClick}/>
              <h2>random?</h2>
            </div>
             
        </div>

         
        
        {/* <Quiz questions = {questions} score = {score} remainingGuesses = {remainingGuesses} removeQuizQuestion = {removeQuizQuestion} updateScore = {updateScore}/> */}
        {/* <Joke /> */}
        {/* <Footer /> */}
        </>
    )
}

export default BBCSleighRide;