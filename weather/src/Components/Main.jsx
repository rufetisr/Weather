import React from 'react'
import DailyForecast from './DailyForecast';
import Search from './Search';
import WeatherCard from './WeatherCard';
import HourlyForecast from './HourlyForecast';
const Main = () => {
    return (
        <main style={{display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
            <Search/>
            <WeatherCard/>
            <HourlyForecast/>
            <DailyForecast/>
        </main>
    )
}

export default Main;