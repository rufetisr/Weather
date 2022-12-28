import { useState } from 'react'
import './App.css'
import Home from "./Pages/Home"
import Context from "./Context/Context"


function App() {
  const [count, setCount] = useState(0)
  const [obj, setObj] = useState({});
  const [inputValue, inputSetValue] = useState("");

  const data = {
    count,
    setCount,
    obj,
    setObj,
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
