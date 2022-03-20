import { BsSunrise } from "react-icons/bs";
import { BsSunset } from "react-icons/bs";
import { BsSpeedometer2 } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { BsCloudRainHeavy } from "react-icons/bs"
import { FaTemperatureLow } from "react-icons/fa"

const NextDay = ({ tempData, data, isMetric, nday }) => {
  /* 
  calculating the sunrise time and sunset time for display
  */
  var epoch = parseInt(data['sunrise'] - 1800);
  var myDate = new Date(epoch * 1000);
  var hourDawn = myDate.getHours();
  var minutesDawn = myDate.getMinutes();

  epoch = parseInt(data['sunset'] + 3200);
  myDate = new Date(epoch * 1000);
  var hourDusk = myDate.getHours();
  var minutesDusk = myDate.getMinutes();

  if (minutesDusk < 10) {
    minutesDusk = '0' + minutesDusk
  }
  if (minutesDawn < 10) {
    minutesDawn = '0' + minutesDawn
  }


  //metric/imperial conversion for temp
  function returnTemp() {
    if (isMetric) {
      return Math.round(data['temp']['day'] - 273.15) + "°C"
    }
    else {
      return Math.round((data['temp']['day'] - 273.15) * 1.8 + 32) + "°F"
    }
  }

  function returnSpeed() {
    if (isMetric) {
      return Math.round(data['wind_speed']) + " khp"
    }
    else {
      return Math.round(data['wind_speed']/1.6) + " mph"
    }
  }

  return (
    <div className="coming">
      <div id="current_date">
        <h2 style={{margin: "0 0 5px 0"}}>{nday}</h2>
        <h4 style={{margin: "0"}}>{data['weather'][0]['main']}</h4> 
      </div>
      <hr></hr>
        <div id="float-container">
          <div id="float-child">
            <div className="temperature-forecast">
              <div style={{ float: "left" }}><FaTemperatureLow size={25} /></div>
              <span style={{ padding: "20% 0 0 10px" }}>{returnTemp()} </span>
            </div>
            <div className="precipitation-forecast">
              <div style={{ float: "left" }}><BsCloudRainHeavy size={25} /></div>
              <span style={{ padding: "20% 0 0 10px" }}>{parseInt(data['pop'] * 100)}% </span>
            </div>
            <div className="sunrise-forecast">
              <div style={{ float: "left" }}><BsSunrise size={25} /></div>
              <span style={{ padding: "20% 0 0 10px" }}>{hourDusk}:{minutesDusk} </span>
            </div>
          </div>
          <div id="float-child">
            <div className="speed">
              <div style={{ float: "left" }}><BsSpeedometer2 size={25} /></div>
              <span style={{ padding: "20% 0 0 10px" }}>{returnSpeed()}</span>
            </div>
            <div className="humidity">
              <div style={{ float: "left" }}><WiHumidity size={25} /></div>
              <span style={{ padding: "20% 0 0 10px" }}>{data['humidity']}% </span>
            </div>
            <div className="sunset">
              <div style={{ float: "left" }}><BsSunset size={25} /> </div>
              <span style={{ padding: "20% 0 0 10px" }}>{hourDawn}:{minutesDawn} </span>
            </div>
          </div>
        </div>
      </div>
  )
}
export default NextDay