import React, {useState, memo, useEffect} from "react";
import { ReactDOM } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from "react-simple-maps";
import useSound from 'use-sound';

import MapModal from "./MapModal";

import "../css/map.css";
import sleigh from "../assets/images/sleigh_55_33.svg";
import jingle_bells from "../assets/sounds/jingle_bells_cut.mp3";
import hohoho from "../assets/sounds/hohoho.mp3";
import wishyoumerry from "../assets/sounds/we_wish_you_a_merry_christmas.mp3";
import sleighbells from "../assets/sounds/sleigh-bells.wav";
import baubleGreetings from "../assets/images/bauble_greetings.svg";
import baubleDates from "../assets/images/bauble_dates.svg";
import baubleFoods from "../assets/images/bauble_foods.svg";
import crackerGreetings from "../assets/images/christmas_cracker_greetings.svg";
import crackerDates from "../assets/images/christmas_cracker_dates.svg";
import crackerFoods from "../assets/images/christmas_cracker_foods.svg";
import bauble_instructions from "../assets/images/bauble_instructions.svg";



const Map = ( { countriesData, setTooltipContent, onFilterSelect, chosenFilter } ) => {

    const [position, setPosition] = useState({ coordinates: [10, 8], zoom: 1.1 });
    const [play1] = useSound(jingle_bells);
    const [play2] = useSound(hohoho);
    const [play3] = useSound(wishyoumerry);
    const [sleighBells] = useSound(sleighbells);
    const [openMapModal, setOpenMapModal] = useState(false);



    if (!countriesData) {
        return null
      }

    const setModal = () => {
        setOpenMapModal(true);
    }


    //FOR WHEN FILTER BUTTONS ARE SELECTED
    const handleChange = (event) => {
        const playArray = [play1, play2, play3]
        const toPlay = playArray[Math.floor(Math.random()*playArray.length)]
        toPlay()
        onFilterSelect(event.target.value);
        console.log('event value is', event.target.value)
    }



    //MAP ZOOMING FUNCTIONS
    const handleZoomIn = () => {
        if (position.zoom >= 4) return;
        setPosition(pos => ({ ...pos, zoom: pos.zoom * 1.2 }));
    }

    const handleZoomOut = () => {
        if (position.zoom <= 1) return;
        setPosition(pos => ({ ...pos, zoom: pos.zoom / 1.2 }));
    }

    const handleMoveEnd = () => {
        setPosition(position);
    }



    //MAP DATA
    const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

    // these are set here to allow for easy adjustment (can set e.g. offset values for each individual pin, easier here than tweaking wihtin a DB)
    const markers = [
        {name: "France", coordinates: [2.349014, 48.864716]},
        {name: "South Africa", coordinates: [24.7499, -28.7282]},
        {name: "Kenya", coordinates: [37.9062, -0.0236]},
        {name: "United States of America", coordinates: [-100.8603, 38.2700]},
        {name: "Australia", coordinates: [136.2092, -26.5957]},
        {name: "Nicaragua", coordinates: [-85.2072, 12.8654]},
        {name: "Argentina", coordinates: [-67.3667, -37.1833]},
        {name: "Japan", coordinates: [138.2529, 36.2048]},
        {name: "Algeria", coordinates: [1.6596, 28.0339]},
        {name: "Kazakhstan", coordinates: [66.9237, 48.0196]},
        {name: "India", coordinates: [78.9629, 20.5937]},
        {name: "Brazil", coordinates: [-51.9253, -14.2350]},
    ];


    return (
        <>


        <div className="map-container">
            <div className="map-filters">
                <img className="bauble-instructions" src={bauble_instructions} type="openModalBtn" onClick={() => {setOpenMapModal(true)}}/>
                    {openMapModal && <MapModal setOpenModal={setOpenMapModal}/>}
                <input className="map-cracker" type="image" src={crackerGreetings} alt="greeting" name="filter" value="greeting" onClick={handleChange}/>
                <input className="map-cracker" type="image" src={crackerDates} alt="dates" name="filter" value="celebrated" onClick={handleChange}/>
                <input className="map-cracker" type="image" src={crackerFoods} alt="foods" name="filter" value="meal" onClick={handleChange}/>
            </div>

            <div className="card">
                <div className="controls">
                    <button onClick={handleZoomIn}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                    >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    </button>
                    <button onClick={handleZoomOut}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                    >
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    </button>
                </div>
                <ComposableMap data-tip="" width={650} height={350} projectionConfig={{ scale: 140 }} onBlur>
                    <ZoomableGroup zoom={position.zoom} center={position.coordinates} onMoveEnd={handleMoveEnd}>
                        <Geographies geography={geoUrl}>
                            {({geographies}) => geographies.map(geo =>
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onMouseEnter={() => {
                                            const { NAME } = geo.properties;
                                            const found = countriesData.find(country => country["name"] === NAME);
                                            console.log(found)
                                            console.log()
                                            if (found) {
                                                const TOOLTIP = found[chosenFilter];
                                                const CONTINENT = found["continent"];
                                                setTooltipContent(`<center><b>${TOOLTIP}</b><br>${NAME}, ${CONTINENT}</center>`)
                                            }
                                        }}
                                        onMouseLeave={() => {
                                            setTooltipContent("");
                                        }}
                                        stroke="#FEFFFD"
                                        strokeWidth="0.5"
                                        style={{
                                            default: {
                                                fill: "#ffbdc4",
                                                outline: "none"
                                            },
                                            hover: {
                                                fill: "#D20018",
                                                outline: "none"
                                            },
                                            pressed: {
                                                fill: "#008011",
                                                outline: "none"
                                            }
                                        }}
                                        />
                            )}
                        </Geographies>
                        {markers.map(({name, coordinates}) => (
                            <Marker key={name} coordinates={coordinates}>
                                          <g
                                            fill="none"
                                            stroke="#008011"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            transform="translate(-12, -24)"
                                        >
                                            <circle cx="12" cy="10" r="3" />
                                            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                                        </g>

                                        <text
                                            textAnchor="middle"
                                            y="-27"
                                            style={{ fontFamily: "system-ui", fontSize: "11px", fontWeight: "400px" }}
                                        >
                                            {name}
                                        </text>

                            </Marker>
                        ))}
                    </ZoomableGroup>
                </ComposableMap>

            </div>
        </div>
    </>
    )
}

export default Map;