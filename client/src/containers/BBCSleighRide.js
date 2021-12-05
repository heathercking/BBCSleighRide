import React, {useState, useEffect} from "react";

import Map from "../components/Map";
import Header from "../components/Header";
import Quiz from "../components/Quiz";
import Joke from "../components/Joke";
import Footer from "../components/Footer";
import MapContainer from "./MapContainer";



const BBCSleighRide = () => {




    return (
        <>
        <Header/>
        <MapContainer/>
        <Quiz/>
        <Joke/>
        <Footer />
        </>
    )
}

export default BBCSleighRide;