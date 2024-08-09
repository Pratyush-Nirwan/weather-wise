import thermometer from '../assets/icons/fill/all/thermometer.svg'
import wind from '../assets/icons/fill/all/wind.svg'
import humidity from '../assets/icons/fill/all/raindrops.svg'
import pressure from '../assets/icons/fill/all/barometer.svg'
import sunrise from '../assets/icons/fill/all/sunrise.svg'
import sunset from '../assets/icons/fill/all/sunset.svg'

import Sunny from './Sunny';
import Perfect from './Perfect';
import Rain from './Rain';
import Haze from './Haze';
import Clouds from './Clouds'
import Forecast from './Forecast'
import SearchBar from './SearchBar';

import React, { useState, useEffect } from 'react';
import ReactTextTransition, { presets } from 'react-text-transition';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [error, setError] = useState(null);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=6e988b9d7f53c3d96b1e3a01e13eba4d`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }
                const data = await response.json();
                setWeatherData(data)
                setError(null);
            } catch (error) {
                setError(error);
            }
        };

        const fetchForecastData = async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&units=metric&appid=6e988b9d7f53c3d96b1e3a01e13eba4d`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch forecast data');
                }
                const data = await response.json();
                setForecastData(data);
                setError(null);
            } catch (error) {
                setForecastData(null)
                setError(error);
            }
        };

        if (searchValue === '') {
            return;
        }
        else {
            fetchWeatherData();
            fetchForecastData();
        }
        console.log('pass')
    }, [searchValue]);

    function formatDate(unixTimestamp) {
        const milliseconds = unixTimestamp * 1000;
        const dateObject = new Date(milliseconds);

        let hours = dateObject.getHours();
        const minutes = String(dateObject.getMinutes()).padStart(2, '0');
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;

        const formattedTime = `${hours}:${minutes} ${period}`;
        return formattedTime;
    }

    let weather;
    if (weatherData) {
        const weatherMain = weatherData.weather[0].main.toLowerCase();
        if (weatherMain === 'clear') {
            weather = 'clear';
        } else if (weatherMain === 'clouds') {
            weather = 'clouds';
        } else if (weatherMain === 'rain' || weatherMain === 'drizzel' || weatherMain === 'thunderstrom') {
            weather = 'rain';
        } else if (weatherMain === 'snow') {
            weather = 'snow';
        } else if (weatherMain === 'mist' || weatherMain === 'fog' || weatherMain === 'smoke' || weatherMain === 'haze' || weatherMain === 'sand' || weatherMain === 'dust') {
            weather = 'haze';
        }
    }

    const searched = (value) => {
        setSearchValue(value);
    };

    return (
        <>
            <SearchBar searched={searched} />
            <div id="weather-forecast">
                {!error && weatherData && (
                    <div id='weather' className='card'>
                        <div className='card-bg'>
                            <div id='weather-bg-glow' style={{
                                background:
                                    weather === 'clear' ? 'rgba(0, 134, 255, 0.5)' :
                                        weather === 'rain' ? 'rgb(0, 4, 79)' :
                                            weather === 'haze' ? 'rgba(97, 99, 131, 0.8)' :
                                                weather === 'clouds' ? 'rgba(0, 134, 255, 0.5)' :
                                                    'inherit'
                            }}></div>
                        </div>
                        <div id='name-icon'>
                            <div id='name'>
                                <div id="date-time">{formatDate(weatherData.dt)}</div>
                                <h1 id='city-name'>
                                    {weatherData.name}, {weatherData.sys.country}
                                </h1>
                                <div id='lat-lon'>
                                    Lon: {weatherData.coord.lon} Lat: {weatherData.coord.lat}
                                </div>
                            </div>
                            {weather === 'clear' && <Perfect />}
                            {weather === 'rain' && <Rain />}
                            {weather === 'haze' && <Haze />}
                            {weather === 'clouds' && <Clouds />}
                        </div>
                        <div id='info'>
                            <div id='temp' className='info-item'>
                                <img src={thermometer} alt='' id='thermometer' className='icon' />
                                <h3>  {weatherData.main.temp}°C <br /><span className='small'>Feels like {weatherData.main.feels_like}°C</span>
                                </h3>
                            </div>
                            <div id='wind' className='info-item'>
                                <img src={wind} alt='' className='icon' />
                                <h3>
                                    {weatherData.wind.speed}m/s <br /> <span className='small'>Windspeed</span>
                                </h3>
                            </div>
                            <div id='humidity' className='info-item'>
                                <img src={humidity} alt='' className='icon' />
                                <h3>{weatherData.main.humidity}% <br /> <span className='small'>Humidity</span></h3>
                            </div>
                            <div id='pressure' className='info-item'>
                                <img src={pressure} alt='' className='icon' />
                                <h3>{weatherData.main.pressure}hPa<br /> <span className='small'>Pressure</span></h3>
                            </div>
                            <div id='sunrise' className='info-item'>
                                <img src={sunrise} alt='' className='icon' />
                                <h3>{formatDate(weatherData.sys.sunrise)} <br /> <span className='small'>Sunrise</span></h3>
                            </div>
                            <div id='sunset' className='info-item'>
                                <img src={sunset} alt='' className='icon' />
                                <h3>{formatDate(weatherData.sys.sunset)} <br /> <span className='small'>Sunset</span></h3>
                            </div>
                        </div>
                    </div>
                )}
                {error && <p>Failed to fetch weather data. Please try again.</p>}
                {forecastData &&
                    <div id="forecast-div" className='card'>
                        <div className='card-bg'>
                            <div id='weather-bg-glow2' style={{
                                background:
                                    weather === 'clear' ? 'rgba(0, 134, 255, 0.5)' :
                                        weather === 'rain' ? 'rgb(0, 4, 79)' :
                                            weather === 'haze' ? 'rgba(97, 99, 131, 0.8)' :
                                                weather === 'clouds' ? 'rgba(0, 134, 255, 0.5)' :
                                                    'inherit'
                            }}></div>
                        </div>
                        <Forecast weatherData={forecastData} />
                    </div>
                }

            </div>
        </>
    );
};

export default Weather;