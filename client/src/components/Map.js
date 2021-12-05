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

    const handleChange = (event) => {
        onFilterSelect(event.target.value);
        console.log('event value is', event.target.value)
    }

    console.log('chosen filter is', chosenFilter)


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
            <div className="card">
                <ComposableMap data-tip="" width={800} height={500} projectionConfig={{ scale: 190 }}>
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
                                    style={{
                                        default: {
                                            fill: "#fca7a7",
                                            outline: "none"
                                        },
                                        hover: {
                                            fill: "#d90000",
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
                            <a href=""><circle r={5} fill="#008011" /></a>
                            <text textAnchor="middle" y="-11" style={{ fontSize: "8px" }}>{name}</text>
                        </Marker>
                    ))}
                </ComposableMap>    
            </div>
            <div className="map-filters">
                <button onClick={handleChange} className="map-filter-btn" type="submit" name="filter" value="greeting">'Merry Christmas' in different languages</button>
                <button onClick={handleChange} className="map-filter-btn" type="submit" name="filter" value="celebrated">What day is Christmas celebrated on?</button>
                <button onClick={handleChange} className="map-filter-btn" type="submit" name="filter" value="meal">What's the traditional Christmas meal?</button>
            </div>
        </div>
    </>
    )
}

export default Map;