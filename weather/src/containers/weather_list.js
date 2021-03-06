import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/charts';

class WeatherList extends Component{

    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
        <tr key={name}>
            <td>{name}</td>
            <td>
                <Chart temps={temps} color="red" units="K"/>
            </td>
            <td>
                <Chart temps={pressures} color="blue" units="hpa"/>
            </td>
            <td>
                <Chart temps={humidities} color="red" units="%"/>
            </td>
        </tr>
        );
    }

    render(){
        return (
            <table className='table table-hover' >
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hpa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}){
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
