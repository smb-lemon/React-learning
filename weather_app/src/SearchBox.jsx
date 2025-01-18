import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = process.env.Weather_API_KEY;

  const getWeatherInfo = async () => {
    try {
      console.log("Fetching weather data for:", city); // Log the city before making the API call

      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      
      console.log("API response:", jsonResponse); // Log the response to see the returned data

      if (response.ok) {
        return {
          city: city,
          temp: jsonResponse.main.temp,
          tempMin: jsonResponse.main.temp_min,
          tempMax: jsonResponse.main.temp_max,
          humidity: jsonResponse.main.humidity,
          feelslike: jsonResponse.main.feels_like,
          weather: jsonResponse.weather[0]?.description || 'No description available',
        };
      } else {
        console.error("Error:", jsonResponse.message);
        throw new Error(jsonResponse.message || "Failed to fetch weather data");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log("City entered:", city); // Log the city when the form is submitted

    if (city.trim() === "") {
      alert("Please enter a city.");
      return;
    }

    const newInfo = await getWeatherInfo();
    
    if (newInfo) {
      console.log("Weather data fetched:", newInfo); 
      updateInfo(newInfo);
    } else {
      console.error("Could not fetch weather data."); 
      alert("Could not fetch weather data. Please try again.");
    }

    setCity("");
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
