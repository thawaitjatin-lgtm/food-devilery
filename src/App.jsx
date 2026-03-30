import React from "react";
import { FaSearch } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import wicon from"../src/assets/hero.png";

function App() {
  return (
     
      <div className="flex flex-col items-center justify-center h-screen bg-linear-to-br from-green-950  to-black text-white">
      {/* search bar & icon */}
      
      <div className="flex items-center bg-white rounded-full px-4 py-2 mb-6 w-80 shadow-lg">
        <input type="text" placeholder="search" className="flex-1 text-black outline-none px-2"/>
        <FaSearch className="text-gray-500 cursor-pointer"/>
      </div>
      {/*  weather icon */}
      <img src={wicon} alt="" className="w-20 h-20 mb-4"/>

      {/* temprature & wind speed  */}
      <h1 className="text-4xl font-bold">40°C</h1>
      <h2 className="text-2xl mt-2 font-semibold">kolkata</h2>


      {/* humidity & wind speed */}
      <div className=" w-full max-w-md mt-6 flex flex-col md:flex-row items-center justify-center md:items-start" >
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <WiHumidity className="text-3xl"/>
        <span className="text-lg font-medium">80%</span>
        <p className="text-sm">Humidity</p>
      </div>
      <div className="flex flex-col items-center">
        <WiStrongWind className="text-3xl"/>
        <span className="text-lg font-medium">10 km/h</span>
        <p className="text-sm">Wind Speed</p>
      </div>
      </div>
       
     </div>

    

  );
}

export default App;