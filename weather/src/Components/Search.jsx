import React, {useContext} from 'react';
import './Search.css'
import Context from '../Context/Context';
import { getDataFromApi } from '../Services/Db';
// import axios from "axios";

const Search = () => {
    let {setImg, weather, setWeather} = useContext(Context)
    
    let getData = async (e) => {
        e.preventDefault();
         
        let result = await getDataFromApi(`${e.target.city.value}`);        
        setWeather(result);
        setImg(`http://openweathermap.org/img/wn/${result.data.weather[0].icon}@2x.png`)
        console.log(result);
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
