import React, {useState, useEffect} from "react";
import Map from "../components/Map";
import Header from "../components/Header";
import Quiz from "../components/Quiz/Quiz";
import Joke from "../components/Joke";
import Footer from "../components/Footer";
import { getQuestions } from "../services/SleighRideService";


const BBCSleighRide = () => {

    const [questions, setQuestions] = useState([]);
    var [score, setScore] = useState({
                                                correctQuestions: 0,
                                                incorrectQuestions: 0,
                                                totalQuestions: 0
    });
   

    useEffect(() => {
        getQuestions()
        .then(data => {
            setQuestions(data)
        })
    }, [])


    const updateScore = (correct, incorrect, total) => {
        setScore((previousObjectState) => {
                return {
                    ...previousObjectState,
                    correctQuestions: correct,
                    incorrectQuestions: incorrect,
                    totalQuestions: total,
                }
            })
    }

    const removeQuizQuestion = (question) => {
        let temp = questions.map(question => question);
        const indexToDelete = questions.map(questions => questions._id).indexOf(question._id);
        temp.splice(indexToDelete, 1);
        setQuestions(temp);
        // console.log(temp)
    }



    return (
        <>
        {/* <Header/> */}
        {/* <Map/> */}
        <Quiz questions = {questions} score = {score} removeQuizQuestion = {removeQuizQuestion} updateScore = {updateScore}/>
        {/* <Joke /> */}
        {/* <Footer /> */}
        </>
    )
}

export default BBCSleighRide;