import React from 'react';
import { useContext } from "react";
import Context from '../Context/Context';

const Map = () => {
  let { weather, map, setMap } = useContext(Context)
//   maps.openweathermap.org/maps/2.0/weather/PA0
  return (
    <div>
        {/* {
              daily != null ? (
              <p>Map</p>,
                // <iframe src={map} frameborder="1"></iframe>
              ) : '' */}
        {/* //     <img src='https://developer.foreca.com/weathermapapi-eu/' alt="" /> */}
        {/* // {/* <iframe src={map} frameborder="1"></iframe> */}
            
              <iframe src={map} frameborder="1" height={400} width={500}></iframe>
    </div>
  );
}

export default Map;
