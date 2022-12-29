import { useState } from 'react'
import './App.css'
import Home from "./Pages/Home"
import Context from "./Context/Context"


function App() {
  // const [count, setCount] = useState(0)
  const [weather, setWeather] = useState({});
  const [img, setImg] = useState("");
  const [inputValue, inputSetValue] = useState("");

  const data = {
    img, 
    setImg,
    weather,
    setWeather,
    inputValue,
    inputSetValue
  }
  return (
    <Context.Provider value={data}>
      <Home />
    </Context.Provider>
  )
}

export default App
