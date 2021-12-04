import React, {memo} from "react";
import { ReactDOM } from "react";
import { 
    ComposableMap, 
    Geographies, 
    Geography, 
    Marker
} from "react-simple-maps";
import "../css/map.css"


const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
    {name: "United States of America", coordinates: [-74.006, 40.7128], greeting: "Happy Holidays"},
    {name: "United Kingdom", coordinates: [-3.19648, 55.95206], greeting: "Merry Christmas"}
];



const Map = ( {setTooltipContent} ) => {

    return (
        <>
        <h1>Map</h1>
        <div>
            <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
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
                                        const GREETING = found["greeting"];
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
                        <circle r={8} fill="#F53" />
                    </Marker>
                ))}
            </ComposableMap>
        </div>
    </>
    )
}

export default Map;