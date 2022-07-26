import React, { useState } from 'react'

import './App.css'
import { fetchWeather } from './api/fetchWeather'

function App() {
  // const [supportsPWA, setSupportsPWA] = useState(false);
  // const [promptInstall, setPromptInstall] = useState(null);
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");

  // useEffect(() => {
  //   const handler = (e) => {
  //     e.preventDefault();
  //     console.log("we are being triggered :D");
  //     setSupportsPWA(true);
  //     setPromptInstall(e);
  //   };
  //   window.addEventListener("beforeinstallprompt", handler);

  //   return () => window.removeEventListener("transitionend", handler);
  // }, []);

  // const onClick = (evt) => {
  //   evt.preventDefault();
  //   if (!promptInstall) {
  //     return;
  //   }
  //   promptInstall.prompt();
  // };
  // if (!supportsPWA) {
  //   return null;
  // }


    
    const search = async (e) => {
        if(e.key === 'Enter'){
            const data = await fetchWeather(query)
            setWeather(data);
            setQuery('');
        }
    }

    
  return (
    <div className="main-container">
      <div>
        {/* <button
          className="link-button"
          id="setup_button"
          aria-label="Install app"
          title="Install app"
          onClick={onClick}
        >
          Install
        </button> */}
      </div>
      <div>
        <h1 className="title-pwa">Ifeanyi PWA Weather app</h1>
      </div>
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup className="supp">{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App