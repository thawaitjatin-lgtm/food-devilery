import React, {useState} from "react";
import { FaSearch } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
/* import wicon from"../src/assets/hero.png"; */
import axios from "axios";  

function App() {
  const[search,setSearch]=useState("");
  const[loading,setLoading]=useState(false);
  const [temperature,setTemperature]=useState(null);
  const [humidity,setHumidity]=useState(null);
  const [windSpeed,setWindSpeed]=useState(null);
  const [cityName, setCityName]=useState("");
  const [weatherIcon,setWeatherIcon]=useState("n01d");
  const API_KEY = "b47c28ce08b717b921612adaa9276192";

  const fetchWeather=async()=>{
    if(!search) return;
    setLoading(true)
    try{
     const { data } = await axios.get(
  `https://api.openweathermap.org/data/2.5/weather?q=${search}&limit=1&appid=${API_KEY}`
);

      console.log(data);
      if(data.cod===200){
        setTemperature(data.main.temp);
        setHumidity(data.main.humidity);
        setWindSpeed(data.wind.speed);
        setCityName(data.name);
        setWeatherIcon(data.weather[0].icon);
      }
    }catch(error){
    console.log(error);
    setCityName("City not found");
    setTemperature(null);
    setHumidity(null);
    setWindSpeed(null);
    setWeatherIcon("n01d");

    }
    setLoading(false);

  }  

  return (
    
     
          <div className="flex flex-col items-center justify-center h-screen bg-linear-to-br from-green-950  to-black text-white">
      {/* search bar & icon */}
      
      <div className="flex items-center bg-white rounded-full px-4 py-2 mb-6 w-80 shadow-lg">
        <input type="text" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)}
          className="flex-1 text-black outline-none px-2"/>
        <FaSearch className="text-gray-500 cursor-pointer" onClick={fetchWeather}/>
      </div>
      {/*  weather icon */}
      <img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="" className="w-20 h-20 mb-4"/>

      {/* temprature & wind speed  */}
      <h1 className="text-4xl font-bold mb-1">{loading ? "Loading..." : `${temperature ? (temperature - 273.15).toFixed(1) : "N/A"}°C`}</h1>
      <h2 className="text-2xl mt-2 font-semibold">{cityName || "type to check temperature"}</h2>


      {/* humidity & wind speed */}
      <div className=" w-full max-w-md mt-6 flex flex-col md:flex-row items-center justify-center md:items-start" >
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <WiHumidity className="text-3xl"/>
        <span className="text-lg font-medium">{humidity !== null ? `${humidity}%` : "N/A"}</span>
        <p className="text-sm">Humidity</p>
      </div>
      <div className="flex flex-col items-center">
        <WiStrongWind  className="text-3xl"/>
        <span className="text-lg font-medium">{windSpeed !== null ? `${windSpeed} km/h` : "N/A"}</span>
        <p className="text-sm">Wind Speed</p>
      </div>
      </div>
        <p>vtyrdtdstsdvcdrss</p>
     </div>

    

  );
}

export default App;