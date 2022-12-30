import React, {useContext} from 'react';
import './Search.css'
import Context from '../Context/Context';
import { getDataFromApi } from '../Services/Db';
import axios from "axios";

const Search = () => {
    let {setImg, weather, setWeather,setDaily, daily, map, setMap } = useContext(Context)
    
    let getData = async (e) => {
        e.preventDefault();
         
        let result = await getDataFromApi(`${e.target.city.value}`);        
        setWeather(result);        
        setImg(`http://openweathermap.org/img/wn/${result.data.weather[0].icon}@2x.png`)
        console.log(result);

        const key = '2f9270987154c3c51798342a0a80f322';
        let city = e.target.city.value;
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${key}`).then(res=>res.json()).then(data=>{
            console.log(data);
            setDaily(data); 
        });
        
        const key1 = '2f9270987154c3c51798342a0a80f322';

        // fetch(`https://tile.openweathermap.org/map/temp_new/5/${43}/${49}.png?&appid=${key1}`).then(data=>{
        //     console.log(data);
        //     setMap(data.url); 
        // });
        setMap(`https://tile.openweathermap.org/map/temp_new/10/${43}/${49}.png?&appid=${key1}`)
        // https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid={API key}
       // http://maps.openweathermap.org/maps/2.0/weather/PA0/{z}/{x}/{y}?date=1527811200&appid={API key}
        // console.log(dailyRes);
        // console.log(weather.data.main.temp);

    }

    return (
        <div className='search'>
            <form onSubmit={getData}>
                <input required name='city' type="text" placeholder='City' />
                <button type='submit' >Search</button>
            </form>
        </div>
    );
}

export default Search;
