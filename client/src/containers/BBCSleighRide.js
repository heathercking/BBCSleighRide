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
        <Quiz questions = {questions} removeQuizQuestion = {removeQuizQuestion} /*  quizAnswerIsCorrect = {quizAnswerIsCorrect} onAnswerCheck = {handleAnswerCheck} *//>
        {/* <Joke /> */}
        {/* <Footer /> */}
        </>
    )
}

export default BBCSleighRide;