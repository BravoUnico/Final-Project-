import { useEffect, useState } from "react"
//import axios from 'axios'
import Icons from './components/Icons.jsx'

function App() {
 const [search, setSearch] = useState('search')
 const [ values, setValues] = useState('')
 const [ icon, setIcon] = useState('')
 
// fetching data from API
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=en&units=imperial&appid=d9efd9a630e65411cc199912a1fd62e4`
  // const getData = async () => {
  //  const data = await axios.get(URL)
  const getData = async () => {
    await fetch(URL)
      .then(response => {return response.json()})
      .then(data => {
        if(data.cod >=400) {
          setValues(false)
        }else{
          console.log(data.weather[0].main)
          setValues(data)
        }
       
      })
       .catch(error =>{
        console.log(error)
      })
    }
  const handleSearch = (e) =>{     // variable handleSearch will display the output of input instanly in devstool
    if(e.key ==='Enter') {
      console.log(e.target.value)
      setSearch(e.target.value)
    }
   
  }
  useEffect(() => {
   getData() 
  },[search]) 
      return (
    <>
      <div className="App-container">
       <h1>Weather App</h1>
       <h2>Final Project</h2>
       <div className="row">
        <input 
        onKeyDown={handleSearch}
        type="text"
        autoFocus  // everything the page is refresh the cursor will be in the search bar
        />
       </div>
      </div>
      <div className="card">
        {(values) ? (
          <div className="card-container">
            <h1 className="city-name">{values.name}</h1>

            <p className="temp">{values.main.temp.toFixed(0)}&deg;</p>
             <img className="icon" src={Icons(icon)} alt="icon-weather" /> 
            
            <div className="card-footer">
              <p className="temp-max-min">{values.main.temp_min.toFixed(0)}&deg; | {values.main.temp_max.toFixed(0)}&deg;</p>
              </div>
          </div>
        ) : (
          <h1>{"city not found"}</h1>
        ) } 
      </div>
      
    </>
  );
}        

export default App