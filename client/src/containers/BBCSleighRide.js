import React, {useState, useEffect} from "react";
import ReactTooltip from 'react-tooltip';

import Map from "../components/Map";
import Header from "../components/Header";
import Quiz from "../components/Quiz";
import Joke from "../components/Joke";
import Footer from "../components/Footer";




const BBCSleighRide = () => {

    const [content, setContent] = useState("");
    const [selectedMapFilter, setSelectedMapFilter] = useState("");

    const handleSelectedMapFilter = (filter) => {
        setSelectedMapFilter(filter);
    }


    return (
        <>
        <Header/>
        <Map setTooltipContent={setContent} onFilterSelect={handleSelectedMapFilter} chosenFilter={selectedMapFilter} />
        <ReactTooltip>{content}</ReactTooltip>
        <Quiz/>
        <Joke />
        <Footer />
        </>
    )
}

export default BBCSleighRide;