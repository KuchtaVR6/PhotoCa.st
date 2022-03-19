import NextDay from "./NextDay.js"

const Forecast = ({weatherData}) => {
    const current = new Date();
    const first = current.getDate() - current.getDay();// set first day on monday and not sunday
    const day = current.getDay();
    const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday", "Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  return (
    <div className="page forecast">
      <div className="smallfore">
        <NextDay nday={daylist[day+1]} data={weatherData['daily'][day+1]} isMetric={false} />
      </div>
      <div className="smallfore">
        <NextDay nday={daylist[day+1]} data={weatherData['daily'][day+1]} isMetric={false}  />
      </div>
      <div className="smallfore">
        <NextDay nday={daylist[day+1]} data={weatherData['daily'][day+1]} isMetric={false}  />
      </div>
      <div className="smallfore">
        <NextDay nday={daylist[day+1]} data={weatherData['daily'][day+1]} isMetric={false}  />
      </div>
      <div className="smallfore">
        <NextDay nday={daylist[day+1]} data={weatherData['daily'][day+1]} isMetric={false} />
      </div>
      

    </div>
    
  )
}

export default Forecast