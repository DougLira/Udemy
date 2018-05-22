import axios from 'axios';
import * as types from '../types';

const API_KEY = '7799d60a5188a799d55f7fe261a598e9';
const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${WEATHER_API_URL}&q=${city},BR&units=metric`;
  const request = axios.get(url);
  
  return {
    type: types.FETCH_WEATHER,
    payload: request
  };
}