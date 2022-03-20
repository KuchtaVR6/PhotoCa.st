import { useEffect, useState } from "react";
import NextDay from "./NextDay.js"

const Forecast = ({weatherData,isMetric}) => {
  //days of the week, repeated in case of asking for index >7 which might happen example it's wednesday (3) and we ask for a day in 7 days (10)
  const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday", "Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

  const[day,setDay] = useState(0);

  useEffect(()=>{
    //calculating the date factoring in the timezone_offset
    var epoch = ((new Date()).getTime())+weatherData['timezone_offset']*1000
    var current = new Date(epoch);
    setDay(current.getDay());
  },[weatherData,day])
  
  return (
    <div className="page forecast">
      <div className="smallfore">
        <NextDay nday={daylist[day+1]} data={weatherData['daily'][1]} isMetric={isMetric} />
      </div>
      <div className="smallfore">
        <NextDay nday={daylist[day+2]} data={weatherData['daily'][2]} isMetric={isMetric}/>
      </div>
      <div className="smallfore">
        <NextDay nday={daylist[day+3]} data={weatherData['daily'][3]} isMetric={isMetric}/>
      </div>
      <div className="smallfore">
        <NextDay nday={daylist[day+4]} data={weatherData['daily'][4]} isMetric={isMetric}/>
      </div>
      <div className="smallfore">
        <NextDay nday={daylist[day+5]} data={weatherData['daily'][5]} isMetric={isMetric}/>
      </div>
      <div className="smallfore">
        <NextDay nday={daylist[day+6]} data={weatherData['daily'][6]} isMetric={isMetric}/>
      </div>


    </div>

  )
}

export default Forecast