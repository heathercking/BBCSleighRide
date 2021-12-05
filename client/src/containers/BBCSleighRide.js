import React, {useState, useEffect} from "react";
import ReactTooltip from 'react-tooltip';

import Map from "../components/Map";
import Header from "../components/Header";
import Quiz from "../components/Quiz";
import Joke from "../components/Joke";
import Footer from "../components/Footer";




const BBCSleighRide = () => {

    const [countries, setCountries] = useState([]);
    const [content, setContent] = useState("");
    const [selectedMapFilter, setSelectedMapFilter] = useState("greeting");

    useEffect(() => {
        getCountries();
    }, [])


    const handleSelectedMapFilter = (filter) => {
        setSelectedMapFilter(filter);
    }

    const getCountries = function() {
        fetch('http://localhost:5000/api/countries')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }


    return (
        <>
        <Header/>
        <Map countriesData={countries} setTooltipContent={setContent} onFilterSelect={handleSelectedMapFilter} chosenFilter={selectedMapFilter} />
        <ReactTooltip multiline={true} html={true}>{content}</ReactTooltip>
        <Quiz/>
        <Joke />
        <Footer />
        </>
    )
}

export default BBCSleighRide;