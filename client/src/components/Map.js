import React, {useState, memo} from "react";
import { ReactDOM } from "react";
import { 
    ComposableMap, 
    Geographies, 
    Geography, 
    Marker,
    ZoomableGroup
} from "react-simple-maps";
import "../css/map.css"
import candyCane from "../assets/candy_cane.svg"



const Map = ( { countriesData, setTooltipContent, onFilterSelect, chosenFilter } ) => {

    const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

    if (!countriesData) {
        return null
      }

    const handleChange = (event) => {
        onFilterSelect(event.target.value);
        console.log('event value is', event.target.value)
    }

    // console.log('chosen filter is', chosenFilter)


    //MAP ZOOMING FUNCTIONS
    function handleZoomIn() {
      if (position.zoom >= 4) return;
      setPosition(pos => ({ ...pos, zoom: pos.zoom * 2 }));
    }
  
    function handleZoomOut() {
      if (position.zoom <= 1) return;
      setPosition(pos => ({ ...pos, zoom: pos.zoom / 2 }));
    }
  
    function handleMoveEnd(position) {
      setPosition(position);
    }


    //MAP DATA
    const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

    const markers = [
        {name: "France", coordinates: [2.349014, 48.864716]},
        {name: "South Africa", coordinates: [24.7499, -28.7282]},
        {name: "Kenya", coordinates: [37.9062, -0.0236]},
        {name: "United States of America", coordinates: [-100.8603, 38.2700]},
        {name: "Australia", coordinates: [136.2092, -26.5957]},
        {name: "Nicaragua", coordinates: [-85.2072, 12.8654]},
        {name: "Argentina", coordinates: [-63.6167, -38.4161]},
        {name: "Japan", coordinates: [138.2529, 36.2048]},
    ];


    return (
        <>
        
        <div className="map-container">
            <div className="map-filters">
                <button onClick={handleChange} className="map-filter-btn" type="submit" name="filter" value="greeting">How do you say 'Merry Christmas' in different languages?</button>
                <button onClick={handleChange} className="map-filter-btn" type="submit" name="filter" value="celebrated">What day is Christmas celebrated on?</button>
                <button onClick={handleChange} className="map-filter-btn" type="submit" name="filter" value="meal">What's the traditional Christmas meal?</button>
            </div>
            <div className="card">
                <ComposableMap data-tip="" width={800} height={500} projectionConfig={{ scale: 190 }}>
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
                                                // const TOOLTIP = found[chosenFilter];
                                                // setTooltipContent(`${TOOLTIP}`)
                                                const tooltipContinent = found["continent"]
                                                const tooltipGreeting = found["greeting"]
                                                const tooltipCelebrated = found["celebrated"]
                                                const tooltipDecorations = found["decorations"]
                                                const tooltipMeal = found["meal"]
                                                setTooltipContent(`
                                                    <b>Continent:</b> ${tooltipContinent}
                                                    <br>
                                                    <b>Greeting:</b> ${tooltipGreeting}
                                                    <br>
                                                    <b>Day Celebrated:</b> ${tooltipCelebrated}
                                                    <br>
                                                    <b>Traditional Decorations:</b> ${tooltipDecorations}
                                                    <br>
                                                    <b>Traditional Meal:</b> ${tooltipMeal}
                                                    `)
                                            } else {
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
                                                fill: "#008011",
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
                                <a href=""><circle r={5} fill="#008011" /></a>
                                {/* <img src={candyCane} alt=""> */}
                                {/* <circle>{candyCane}</circle> */}
                                {/* <g>
                                    <image>{candyCane}</image>
                                </g> */}
                                
                                <text textAnchor="middle" y="-11" style={{ fontSize: "8px" }}>{name}</text>
                            </Marker>
                        ))}
                    </ZoomableGroup>
                </ComposableMap>
                
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

            </div>
        </div>
    </>
    )
}

export default Map;