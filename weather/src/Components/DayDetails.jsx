import React from 'react'
import { useContext } from "react";
import Context from '../Context/Context';
import './DayDetails.css'
const DayDetails = () => {
    let { setDaily, daily, weather } = useContext(Context)


    if (weather.data != undefined) {

        return (
            <div className='day-details'>
                <h1>Day Details</h1>
                <hr />
                <div className='details'>
                    <div className='sec1'>
                        <div className="sec3">
                            <img src="src\assets\thermometer.png" alt="" />
                            <p>Feels Like:</p>
                        </div>
                        <p>{Math.floor(weather.data.main.feels_like)}&deg;C</p>
                    </div>
                    <div className='sec1'>
                        <div className='sec3'>
                            <img src="src\assets\thermometer.png" alt="" />
                            <p>Humdity: </p>
                        </div>
                        <p>{weather.data.main.humidity}%</p>
                    </div>
                    <div className='sec1'>
                        <div className='sec3'>
                            <img src="src\assets\wind.webp" alt="" />
                            <p>Wind: </p>
                        </div>
                        <p>{weather.data.wind.speed} m/s</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DayDetails