import React, {useState, useEffect} from "react";
import ReactTooltip from 'react-tooltip';

import Map from "../components/Map";
import "../css/mapcontainer.css";



const MapContainer = () => {

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
        <Map countriesData={countries} setTooltipContent={setContent} onFilterSelect={handleSelectedMapFilter} chosenFilter={selectedMapFilter} />
        <ReactTooltip type="dark" effect="float" multiline={true} html={true} border={true} borderColor="#D20018" scrollHide={true}>{content}</ReactTooltip>
        </>
    )
}

export default MapContainer;