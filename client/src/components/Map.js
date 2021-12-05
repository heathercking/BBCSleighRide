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

    if (!countriesData) {
        return null
      }

    const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

    const markers = [
        {name: "France", coordinates: [2.349014, 48.864716]},
        {name: "South Africa", coordinates: [24.7499, -28.7282]},
        {name: "United States of America", coordinates: [-100.8603, 38.2700]},
        {name: "Australia", coordinates: [136.2092, -26.5957]},
        {name: "United Kingdom", coordinates: [-3.19648, 55.95206]}
    ];



    // const tooltipData = countriesData.map((country) => ({
    //     "name": country.name,
    //     "greeting": country.greeting,
    //     "day": country.celebrated
    // }));
    // console.log(tooltipData[0].name)
    

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
                <button onClick={handleChange} className="map-filter-btn" type="submit" name="filter" value="celebrated">What day is Christmas celebrated on?</button>
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
                                        const found = countriesData.find(country => country["name"] === NAME);
                                        console.log(found)
                                        console.log()
                                        if (found) {
                                            const TOOLTIP = found[chosenFilter];
                                            setTooltipContent(`${TOOLTIP}`)
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