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
import mapCracker from '../assets/images/christmas_cracker_map.svg';
import countdownTitle from '../assets/images/christmas_countdown.svg';
import '../css/BBCSleighRide.css';

import Snowflakes from "magic-snowflakes";
import {Helmet} from "react-helmet";
import JokeContainer from "./JokeContainer";



const BBCSleighRide = () => {

  const [isSnowing, setIsSnowing] = useState(false)

  const [modalOpen, setModalOpen] = useState(false);


  let navQuiz = useNavigate();
  function handleQuizClick() {
    navQuiz('/quiz');
  }

  let navMap = useNavigate();
  function handleMapClick() {
    navMap('/map');
  }




  const snowStart = () => {
    let snowflakes = new Snowflakes(
      {
        color: '#FEFFFD', // Default: "#5ECDEF"
        // container: document.querySelector('#snowflakes-container'), // Default: document.body
        count: 100, // 100 snowflakes. Default: 50
        minOpacity: 0.1, // From 0 to 1. Default: 0.6
        maxOpacity: 0.95, // From 0 to 1. Default: 1
        minSize: 20, // Default: 10
        maxSize: 50, // Default: 25
        rotation: true, // Default: true
        speed: 2, // The property affects the speed of falling. Default: 1
        wind: false, // Without wind. Default: true
        width: 500, // Default: width of container
        // height: 80%, // Default: height of container
        zIndex: 100 // Default: 9999
    }
    );
    // window.setTimeout(reload(), 30000);
    // snowflakes.start();
    // snowflakes.destroy();
  }

  // const reload = () => {
  //   window.location.reload();
  // }

  const snowStop = () => {
    window.location.reload();
  }

  // const handleClick = () => {
  //   let snowflakes = new Snowflakes();
  //   snowflakes.stop();
  //   if (!isSnowing) {
  //     snowflakes.start()
  //     setIsSnowing(true);
  //   } else {
  //     snowflakes.destroy()
  //     setIsSnowing(false);
  //   }
  // }

  // const stopSnow = () => {
  //   const snowflakes = new Snowflakes();
  //   snowflakes.stop();
  // }

  // const startSnow = () => {
  //   if (snowTimer === true) {
  //     const snowflakes = new Snowflakes();
  //   };
  // }


  // const stopSnowflakes = () => {
  //   new Snowflakes().stop();
  // }




    return (
        <section className="background">
        <div className="main-section">
          <div className="countdown">
            <img className="countdown-title" src={countdownTitle} alt="Countdown to Christmas..." />
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

              <button onClick={snowStart}>START</button>
              <button onClick={snowStop}>START</button>

{/*
              <Helmet>
              <script src="https://unpkg.com/magic-snowflakes/dist/snowflakes.min.js"></script>
              <script>var snowflakes = new Snowflakes();</script>
              </Helmet> */}

              {/* <button onClick="snowflakes.stop()">Stop</button>
              <button onClick="snowflakes.start()">Start</button>
              <button onClick="snowflakes.hide()">Hide</button>
              <button onClick="snowflakes.show()">Show</button>  */}


              <img id="joke-button" className="cracker-joke" src={jokeCracker} alt="Joke" onClick={() => {setModalOpen(true);
        }}/>

              {modalOpen && <JokeContainer setOpenModal={setModalOpen} />}

              <h2>random?</h2>
            </div>

        </div>

        </section>
    )
}

export default BBCSleighRide;