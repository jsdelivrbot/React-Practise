import axios from 'axios';

const API_KEY = 'b6f13d682a958f735562e4d35df428e7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export default function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // console.log("Request:", request); hrere request(promise) will not have any data

    return {
        type: FETCH_WEATHER,
        payload: request  //hrere request(promise) will have data
    };
}
