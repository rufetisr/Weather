import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const WeatherCard = () => {
    const [obj, setObj] = useState({})
    useEffect=()=>{
        key = '2f9270987154c3c51798342a0a80f322'
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${key}&units={metric}`).then(res=>res.json().then(data=>{
            setObj(data)
        }))
    }
    return (
        <div>
            <div className="card-header">
                ADD CITY
            </div>
            <div className="card-img">

            </div>
            <div className="tempDeg">
                {obj.main.temp}
            </div>
        </div>
    )
}

export default WeatherCard;