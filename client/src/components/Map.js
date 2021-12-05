import React, {useState, memo} from "react";
import { ReactDOM } from "react";
import { 
    ComposableMap, 
    Geographies, 
    Geography, 
    Marker,
    ZoomableGroup
} from "react-simple-maps";
import useSound from 'use-sound';

import "../css/map.css";
import candy_cane from "../assets/candy_cane.svg";
import jingle_bells from "../sounds/jingle_bells_cut.mp3";
import hohoho from "../sounds/hohoho.mp3";
import wishyoumerry from "../sounds/we_wish_you_a_merry_christmas.mp3"




const Map = ( { countriesData, setTooltipContent, onFilterSelect, chosenFilter } ) => {

    const [position, setPosition] = useState({ coordinates: [7, 6], zoom: 1.1 });
    const [play1] = useSound(jingle_bells);
    const [play2] = useSound(hohoho);
    const [play3] = useSound(wishyoumerry);

    if (!countriesData) {
        return null
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

    //MAP CLICK FUNCTIONS
    // const handleGeoClick = () => {
    //     play2()
    // }


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
                <button onClick={handleChange} className="map-filter-btn" type="submit" name="filter" value="greeting">How do you say 'Merry Christmas' in different languages?</button>
                <button onClick={handleChange} className="map-filter-btn" type="submit" name="filter" value="celebrated">What day is Christmas celebrated on?</button>
                <button onClick={handleChange} className="map-filter-btn" type="submit" name="filter" value="meal">What's the traditional Christmas dinner?</button>
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
                <ComposableMap data-tip="" width={900} height={450} projectionConfig={{ scale: 190 }} onBlur>
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
                                                // const tooltipContinent = found["continent"]
                                                // const tooltipGreeting = found["greeting"]
                                                // const tooltipCelebrated = found["celebrated"]
                                                // const tooltipDecorations = found["decorations"]
                                                // const tooltipMeal = found["meal"]
                                                // setTooltipContent(`
                                                //     <b>Continent:</b> ${tooltipContinent}
                                                //     <br>
                                                //     <b>Greeting:</b> ${tooltipGreeting}
                                                //     <br>
                                                //     <b>Day Celebrated:</b> ${tooltipCelebrated}
                                                //     <br>
                                                //     <b>Traditional Decorations:</b> ${tooltipDecorations}
                                                //     <br>
                                                //     <b>Traditional Meal:</b> ${tooltipMeal}
                                                //     `)
                                            } 
                                            else {
                                                setTooltipContent(`${NAME}`)
                                            }
                                        }}
                                        onMouseLeave={() => {
                                            setTooltipContent("");
                                        }}
                                        stroke="#FEFFFD"
                                        strokeWidth="0.4"
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
                                {/* <circle r={5} fill="#008011" /> */}
                                {/* <a href=""><circle r={5} fill="#008011" /></a> */}
                                {/* <img src={candyCane} alt=""> */}
                                {/* <circle>{candyCane}</circle> */}
                                {/* <g>
                                    <image>{candyCane}</image>
                                </g>
                                 */}
                                {/* <text textAnchor="middle" y="-11" style={{ fontSize: "8px" }}>{name}</text> */}
                                {/* <text textAnchor="middle" y="-11" style={{ fontSize: "8px" }}><img src={candy_cane} alt=""></text> */}
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