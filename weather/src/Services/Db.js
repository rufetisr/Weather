// import React from 'react';
import axios from "axios";

export const getDataFromApi = async (city) => {

    const key = '2f9270987154c3c51798342a0a80f322';
    let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`);
    console.log(res);
    return res;
}

