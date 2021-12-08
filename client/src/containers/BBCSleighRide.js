import React, {useState, useEffect, useRef} from "react";

import Map from "../components/Map";
import Header from "../components/Header";
import Countdown from "../components/Countdown";
import Quiz from "./QuizContainer";
import Joke from "../components/Joke";
import Footer from "../components/Footer";
import MapContainer from "./MapContainer";
import { getQuestions } from "../services/SleighRideService";
import {useNavigate} from 'react-router-dom';
import quizCracker from '../assets/images/christmas_cracker_quiz.svg';
import jokeCracker from '../assets/images/christmas_cracker_joke.svg';
import mapCracker from '../assets/images/christmas_cracker_map.svg';
import countdownTitle from '../assets/images/christmas_countdown.svg';
import snowflake from '../assets/images/snowflake_button.svg';
import present from '../assets/images/present.svg';
import '../css/BBCSleighRide.css';
import '../css/Countdown.css';

import Snowflakes from "magic-snowflakes";
import {Helmet} from "react-helmet";
import JokeContainer from "./JokeContainer";



const BBCSleighRide = () => {

  const [snowflakes, setSnowflakes] = useState(null);
  const snowflakesRef = useRef(snowflakes);
  snowflakesRef.current = snowflakes;

  const [modalOpen, setModalOpen] = useState(false);


  let navQuiz = useNavigate();
  function handleQuizClick() {
    navQuiz('/quiz');
  }

  let navMap = useNavigate();
  function handleMapClick() {
    navMap('/map');
  }

  const snowStop = () => {
    snowflakesRef.current.destroy();
  }

  const snowStart = () => {
    let snowflakes = new Snowflakes({
        color: '#FEFFFD', // Default: "#5ECDEF"
        // container: document.querySelector('#snowflakes-container'), // Default: document.body
        count: 150, // 100 snowflakes. Default: 50
        minOpacity: 0.3, // From 0 to 1. Default: 0.6
        maxOpacity: 1, // From 0 to 1. Default: 1
        minSize: 40, // Default: 10
        maxSize: 80, // Default: 25
        rotation: true, // Default: true
        speed: 2, // The property affects the speed of falling. Default: 1
        wind: true, // Without wind. Default: true
        width: 500, // Default: width of container
        // height: 80%, // Default: height of container
        zIndex: 100 // Default: 9999
    })
    setSnowflakes(snowflakes)
    setTimeout(snowStop, 30000);
  }


    return (
      <section className="background">
        <div className="countdown-title">
          <img  src={countdownTitle} alt="Countdown to Christmas..." />
        </div>
        <div className="main-section">
          <div className="cracker-map-wrapper">
            <img className="cracker-map" src={mapCracker} alt="Map" onClick={handleMapClick}/>
          </div>

          <div className="countdown-wrapper">
            <Countdown/>
          </div>

          <div className="cracker-quiz-wrapper">
            <img className="cracker-quiz" src={quizCracker} alt="Quiz" onClick={handleQuizClick}/>
          </div>

    
          <div className="snowflake-wrapper">
            <img className="snowflake" src={snowflake} alt="Snowflake" onClick={snowStart}/>
          </div>

          <div className="joke-wrapper">
            <img id="joke-button" className="cracker-joke" src={jokeCracker} alt="Joke" onClick={() => {setModalOpen(true);}}/>
            {modalOpen && <JokeContainer setOpenModal={setModalOpen} />}
          </div>

          <div className="present-wrapper">
            <img className="present" src={present} alt="Present" />
          </div>
        </div>
      </section>
    )
}

export default BBCSleighRide;