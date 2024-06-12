import "./cardInfo.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';

export default function CardInfo({info}) {

    let Hot_url = "https://thumbs.dreamstime.com/b/heat-wave-extreme-sun-sky-background-hot-weather-global-warming-concept-temperature-summer-season-summer-heat-wave-147982844.jpg";

    let Clear_url = "https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4=";

    let Rain_url = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";
    
    return (   
        <>
            <div className="card">
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="120"
                            image = {info.humidity > 80 ? Rain_url : info.temp >40 ? Hot_url : Clear_url }
                        />
                        <CardContent>
                            <Typography  gutterBottom variant="h5" component="div">
                                <p style={{margin :"0px"}}><b>City : {info.city} </b>{info.humidity > 80 ? <ThunderstormIcon /> : info.temp >20 ? <WbSunnyIcon /> : <CloudIcon />}</p>
                            </Typography>
                            <Typography variant="body2" color="secondary" component="span">
                                <div className="para">
                                <p> <b> Humidity : {info.humidity}</b></p>
                                <p> <b> Speed : {info.speed}/km</b></p>
                                <p> <b> Temp : {info.temp}°C</b></p>
                                <p> <b> Weather : {info.weather}</b></p>
                                <p> <b> TempMax : {info.tempMax}</b></p>
                                <p> <b> TempMin : {info.tempMax}</b></p>
                                </div>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </>
    )
}