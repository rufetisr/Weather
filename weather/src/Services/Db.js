import React from 'react';
import axios from "axios";

export const getDataFromApi = async (city) => {

    const key = '2f9270987154c3c51798342a0a80f322';
    const res = await axios.get(`api.openweathermap.org/data/2.5/q=${city}&units=metric&APPID=${key}`);
    console.log(res);
    return res;
}

