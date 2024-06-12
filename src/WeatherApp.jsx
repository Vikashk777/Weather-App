import SearchBox from "./searchBox";
import CardInfo from "./cardInfo";
import { useState } from "react";


export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState({
        city : "delhi",
        humidity : 36,
        speed : 4.63,
        temp : 36.05,
        tempMax : 36.05,
        tempMin : 36.05,
        weather : "Haze"
    })

    const updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo)
    }

    return (
        <>
        <div className="container">
        <SearchBox updateInfo={updateInfo}/>
        <CardInfo info={weatherInfo}/>
        </div>
        </>
    )
}