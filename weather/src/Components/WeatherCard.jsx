import React, { useContext } from 'react'
import { useEffect } from "react";
// import { useEffect } from 'react';
// import { useState } from 'react';
import Context from "../Context/Context"
import {getDataFromApi} from "../Services/Db"

const WeatherCard = () => {
    //way1
    // let data = useContext(Context);
    //way2
    let {obj, setObj} = useContext(Context)

    // console.log(data);
    // useEffect( () => {
    //     // let key = '2f9270987154c3c51798342a0a80f322'
    //     // let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Baku&appid=${key}&units=metric`);
    //     // let data = await res.json();
    //     // console.log(data);
    //     // setObj(obj)

    // })


    return (
        <div>            
            <div className="card-header">
                ADD CITY
            </div>
            <div className="card-img">

            </div>
            <div className="tempDeg">

            </div>
        </div>
    )
}

export default WeatherCard;