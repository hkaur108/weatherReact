import axios from "axios";
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import DisplayTemp from './DisplayTemp';
let apiKey="c0f9c3aa1d7f4b933f0a71a9057f43fe";

export default function GetCity() {
    const [city,setcity]= useState("");
    const [weather,setweather] = useState("");
    
    const handleCity= (e)=>{
        setcity(e.target.value)

    }
    const fetchWeather= async ()=>{
        try{
            const response= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
            console.log(response)
            setweather(response)
        }
        catch(error){
            console.log("error fetching weather")

        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        fetchWeather()

    }

return (
    <>
    <div className='container' style={{width:"700px",height:"500px", borderRadius:"25px", boxShadow:"0px 0px 5px 5px lightgrey",backgroundColor:"#EAE4DD"}}>
        <div className="row ">
            <div className="col">
                <form action="" className=' my-4 d-flex flex-column align-items-center justify-content-center'>
                <input type="text" 
                placeholder="Enter city"  
                className='p-2 w-100' 
                style={{borderRadius:"10px", outline:"none", border:"none"}}
                name='city'
                value={city}
                autoComplete="off"
                onChange={handleCity}
                /> <br />
                <button type='submit' onClick={handleSubmit} className='btn btn-secondary btn-sm mt-1'>Get Weather</button>
                </form>
        </div>
    </div>
    <div className="row">
        <div className="col">
            {( weather && city) ? (<DisplayTemp weather={weather} setcity={setcity} setweather={setweather}/>):""}
        </div>
    </div>
    </div>
    </> 
)
}
