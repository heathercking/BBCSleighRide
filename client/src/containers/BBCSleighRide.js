import React, {useState, useEffect} from "react";
import Map from "../components/Map";
import Header from "../components/Header";
import Quiz from "../components/Quiz";
import Joke from "../components/Joke";
import Footer from "../components/Footer";
import { getQuestions } from "../services/SleighRideService";


const BBCSleighRide = () => {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        getQuestions()
        .then(data => {
            setQuestions(data)
        })
    }, [])

    return (
        <>
        <Header/>
        <Map/>
        <Quiz questions = {questions}/>
        <Joke />
        <Footer />
        </>
    )
}

export default BBCSleighRide;