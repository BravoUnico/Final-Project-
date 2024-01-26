import { useEffect, useState } from "react"
import axios from 'axios'


function App() {
 const [search, setSearch] = useState('')
 const [ values, setValues] = useState('')
 const [ icon, setIcon] = useState('')
 const [ weather, setWeather] = useState('')

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=rome&lang=en&units=imperial&appid=d9efd9a630e65411cc199912a1fd62e4`
  const getData = async () => {
   const data = await axios.get(URL)
   console.log(data)
   setWeather(data.data)

  }
  useEffect(() => {
    getData()
  },[])
  return (
    <>
      <div className="App">
       <h1>Weather App</h1>
       <h2>Final Project</h2>
      </div>
      
    </>
  )
}

export default App
