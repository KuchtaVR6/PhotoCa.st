import { useEffect, useState } from "react";
import NextDay from "./NextDay.js"

const Forecast = ({weatherData,isMetric}) => {
  //days of the week, repeated in case of asking for index >7 which might happen example it's wednesday (3) and we ask for a day in 7 days (10)
  const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday", "Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

  //keeps track of the day of the week
  const[day,setDay] = useState(0);

  useEffect(()=>{
    //calculating the date factoring in the timezone_offset (read more in landing)
    var epoch = ((new Date()).getTime())+weatherData['timezone_offset']*1000-((new Date()).getTimezoneOffset()*60)
    var current = new Date(epoch);
    setDay(current.getDay());
  },[weatherData,day])
  
  return (
    <div className="page forecast">
      <div className="smallfore">
        <NextDay nday={daylist[day+1]} data={weatherData['daily'][1]} isMetric={isMetric} offset={weatherData['timezone_offset']}/>
      </div>
      <div className="smallfore">
        <NextDay nday={daylist[day+2]} data={weatherData['daily'][2]} isMetric={isMetric}  offset={weatherData['timezone_offset']}/>
      </div>
      <div className="smallfore">
        <NextDay nday={daylist[day+3]} data={weatherData['daily'][3]} isMetric={isMetric}  offset={weatherData['timezone_offset']}/>
      </div>
      <div className="smallfore">
        <NextDay nday={daylist[day+4]} data={weatherData['daily'][4]} isMetric={isMetric}  offset={weatherData['timezone_offset']}/>
      </div>
      <div className="smallfore">
        <NextDay nday={daylist[day+5]} data={weatherData['daily'][5]} isMetric={isMetric}  offset={weatherData['timezone_offset']}/>
      </div>
      <div className="smallfore">
        <NextDay nday={daylist[day+6]} data={weatherData['daily'][6]} isMetric={isMetric}  offset={weatherData['timezone_offset']}/>
      </div>


    </div>

  )
}

export default Forecast