import React, {useState, useEffect} from "react";
import Map from "../components/Map";
import Header from "../components/Header";
import Quiz from "../components/Quiz";
import Joke from "../components/Joke";
import Footer from "../components/Footer";
import { getQuestions } from "../services/SleighRideService";


const BBCSleighRide = () => {

    const [questions, setQuestions] = useState([]);
    let [correctAnswers, setCorrectAnswers] = useState(0);
    let [incorrectAnswers, setCorrectAnswers] = useState(0);
    let [totalQuestions, setCorrectAnswers] = useState(0);

    useEffect(() => {
        getQuestions()
        .then(data => {
            setQuestions(data)
        })
    }, [])

    const removeQuizQuestion = (question) => {
        let temp = questions.map(question => question);
        const indexToDelete = questions.map(questions => questions._id).indexOf(question._id);
        temp.splice(indexToDelete, 1);
        setQuestions(temp);
        console.log(temp)
    }


    return (
        <>
        {/* <Header/> */}
        {/* <Map/> */}
        <Quiz questions = {questions}removeQuizQuestion = {removeQuizQuestion} />
        {/* <Joke /> */}
        {/* <Footer /> */}
        </>
    )
}

export default BBCSleighRide;