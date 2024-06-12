import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"

export default function SearchBox({updateInfo}){
    const[city, setCity] = useState("");
    const[error, setError] = useState(false);

    let api = import.meta.env.VITE_REACT_APP_API;
    let key = import.meta.env.VITE_REACT_APP_API_KEY;

    const getWeatherInfo = async() =>{
        try{
            let response = await fetch(`${api}?q=${city}&appid=${key}&units=metric`);
            let jsonData = await response.json();
            let result = {
                city : city,
                humidity : jsonData.main.humidity,
                temp : jsonData.main.temp,
                tempMax : jsonData.main.temp_max,
                tempMin : jsonData.main.temp_min,
                weather : jsonData.weather[0].main,
                speed : jsonData.wind.speed
            }
            return result
        }catch(err){
            throw err;
        }
    }

    const handleInput = (event)=>{
        setCity(event.target.value);
    }

    const handleSubmit = async (e) =>{
        try{
            e.preventDefault()
            setCity("")
            let result = await getWeatherInfo();
            updateInfo(result);
            setError(false);
        }catch(err){
            setError(true)
        }
        
    }

    return(
        <>
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
            <h2>Welcome to Weather App</h2>
            <TextField  id="outlined-basic" label="City" variant="outlined" value={city} onChange={handleInput}/>
            <br /><br />
            <Button id="btn" variant="contained" color="success" type="submit" >
        Submit
      </Button>
      {error && <p style={{color:"red"}}>No Such Place Find!</p>}
            </form>
        </div>
        </>
    )
}