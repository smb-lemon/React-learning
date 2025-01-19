import "./Weather_app.css"
import DarkMode from "./DarkMode.jsx";
import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function Weather_app(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Iceland",
        feelslike: 24.84,
        temp: 25.85,
        tempMin: 25.05,
        tempMax:25.85,
        humidity: 47,
        weather: "haze",
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div className="weather_app">
            <h2>Weather App by Lemon</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
            <DarkMode/>
        </div>
    );
}