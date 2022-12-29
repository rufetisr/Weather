import React, {useContext} from 'react';
import './Search.css'
import Context from '../Context/Context';
import { getDataFromApi } from '../Services/Db';
import axios from "axios";

const Search = () => {
    let {setImg, weather, setWeather,setDaily, daily } = useContext(Context)
    
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
