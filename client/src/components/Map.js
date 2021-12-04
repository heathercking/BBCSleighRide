import React, {memo} from "react";
import { ReactDOM } from "react";
import { 
    ComposableMap, 
    Geographies, 
    Geography, 
    Marker
} from "react-simple-maps";
import "../css/map.css"



const Map = ( { countriesData, setTooltipContent, onFilterSelect, chosenFilter } ) => {

    // if (tooltipData === undefined) {
    //     return null
    //   }

    const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

    const markers = [
        {name: "United States of America", coordinates: [-74.006, 40.7128], greeting: "Happy Holidays"},
        {name: "United Kingdom", coordinates: [-3.19648, 55.95206], greeting: "Merry Christmas"},
        {name: "France", coordinates: [2.349014, 48.864716], greeting: "Joyeux Noël"}
    ];



    const tooltipData = countriesData.map((country) => country);
    // console.log(tooltipData[0]["celebrated"])
    

    const handleChange = (event) => {
        onFilterSelect(event.target.value);
        console.log('event value is', event.target.value)
    }

    console.log('chosen filter is', chosenFilter)

    return (
        <>
        
        <div className="map-container">
            <div className="map-filters">
                <button onClick={handleChange} className="map-filter-btn" type="submit" name="filter" value="greeting">'Merry Christmas' in different languages</button>
                <button onClick={handleChange} className="map-filter-btn" type="submit" name="filter" value="day">What day is Christmas celebrated on?</button>
                <button onClick={handleChange} className="map-filter-btn" type="submit" name="filter" value="meal">What's the traditional Christmas meal?</button>
            </div>
            <div className="card">
                <ComposableMap data-tip="" width={700} height={500} projectionConfig={{ scale: 190 }}>
                    <Geographies geography={geoUrl}>
                        {({geographies}) => geographies.map(geo =>
                                <Geography 
                                    key={geo.rsmKey} 
                                    geography={geo} 
                                    onMouseEnter={() => {
                                        const { NAME } = geo.properties;
                                        const found = markers.find(country => country["name"] === NAME);
                                        console.log(found)
                                        console.log()
                                        if (found) {
                                            const GREETING = found[chosenFilter];
                                            setTooltipContent(`"${GREETING}" - ${NAME}`)
                                        } else {
                                            setTooltipContent(`${NAME}`)
                                        }
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent("");
                                    }}
                                    style={{
                                        default: {
                                            fill: "#D6D6DA",
                                            outline: "none"
                                        },
                                        hover: {
                                            fill: "#F53",
                                            outline: "none"
                                        },
                                        pressed: {
                                            fill: "#E42",
                                            outline: "none"
                                        } 
                                    }}
                                    />
                        )}
                    </Geographies>
                    {markers.map(({name, coordinates}) => (
                        <Marker key={name} coordinates={coordinates}>
                            <a href=""><circle r={8} fill="#F53" /></a>
                            <text textAnchor="middle" y="-11" style={{ fontSize: "8px" }}>{name}</text>
                        </Marker>
                    ))}
                </ComposableMap>    
            </div>
        </div>
    </>
    )
}

export default Map;