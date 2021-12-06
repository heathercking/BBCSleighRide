import React, {useState, useEffect} from "react";
import Map from "../components/Map";
import Header from "../components/Header";
// import Quiz from "../components/Quiz/QuizContainer";
import Joke from "../components/Joke";
import Footer from "../components/Footer";
import { getQuestions } from "../services/SleighRideService";
import {useNavigate} from 'react-router-dom';
import quizCracker from '../images/christmas_cracker.svg';
import '../styles/BBCSleighRide.css';


const BBCSleighRide = () => {

  let navigate = useNavigate();
  function handleClick() {
    navigate('/quiz');
  }


    return (
        <>
          <p>This is the homepage</p>
          <img className="cracker" src={quizCracker} alt="Quiz" onClick={handleClick}/>
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