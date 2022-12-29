import React, { useContext } from 'react'
import { useEffect } from "react";
// import { useEffect } from 'react';
// import { useState } from 'react';
import Context from "../Context/Context"
import { getDataFromApi } from "../Services/Db"
import './WeatherCard.css'

const WeatherCard = () => {
    //way1
    // let data = useContext(Context);
    //way2
    let { weather } = useContext(Context)

    // console.log(data);
    // useEffect( () => {
    //     // let key = '2f9270987154c3c51798342a0a80f322'
    //     // let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Baku&appid=${key}&units=metric`);
    //     // let data = await res.json();
    //     // console.log(data);
    //     // setObj(obj)

    // })
    if (weather.data != undefined) {

        return (

            <div className='card'>
                <div className="card-header">
                    {`${weather.data.name}`}
                </div>
                <div className="card-img">

                </div>
                <div className="weather">
                    <div className='main-temp'>
                        <p>{`${Math.round(weather.data.main.temp)}°`}</p>
                        <p>Cloudy</p>
                    </div>
                    <div className='other'>
                        <p>Min</p>
                        <p>Max</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default WeatherCard;