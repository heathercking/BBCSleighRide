import React, {useState, useEffect} from "react";
import Joke from "../components/Joke";
import Header from "../components/Header";
import Footer from "../components/Footer";

const JokeContainer = () => {

    return (
        <>
        <Header/>
        <Joke />
        <Footer />
        </>
    )
}

export default JokeContainer;