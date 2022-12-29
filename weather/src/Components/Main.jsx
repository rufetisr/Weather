import React from 'react'
import Search from './Search';
import WeatherCard from './WeatherCard';

const Main = () => {
    return (
        <main style={{display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
            <Search/>
            <WeatherCard/>
        </main>
    )
}

export default Main;