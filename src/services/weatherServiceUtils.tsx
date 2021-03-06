import {
  OPEN_WEATHER_ACCESS_KEY
} from '../../env'
import cities from '../../assets/city-list/city.list.json';

export const OPEN_WEATHER_URL = 'https://community-open-weather-map.p.rapidapi.com';
export const OPEN_WEATHER_HOST= 'community-open-weather-map.p.rapidapi.com';
export const OPEN_WEATHER_KEY= OPEN_WEATHER_ACCESS_KEY;

export const ENDPOINTS = {
  FIND: '/find',
  WEATHER: '/weather',
  FORECAST: '/climate/month',
};

export const API_REQ_TYPE = {
  WEATHER: 'Current Weather',
  SEARCH: 'Search City',
  FORECAST: 'Month Forecast',
}
// Full List of API supported Cities
export const CITIES = cities;
// Maps endpoint:: https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid={API key}
export const mapBaseURL = 'https://tile.openweathermap.org/map/';