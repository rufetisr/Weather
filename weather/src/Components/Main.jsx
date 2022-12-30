import React from 'react'
import DailyForecast from './DailyForecast';
import Search from './Search';
import WeatherCard from './WeatherCard';

const Main = () => {
    return (
        <main style={{display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
            <Search/>
            <WeatherCard/>
            <DailyForecast/>
        </main>
    )
}

export default Main;