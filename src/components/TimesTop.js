import { useEffect, useState } from "react";



const TimesTop = ({ time, sunrise, sunset, nextSunrise }) => {

  const[goldenHour,setGH] = useState();

  /*Get hours and minutes for current time */

  var epoch = parseInt(time);
  var myDate = new Date(epoch * 1000);
  var hourNow = myDate.getHours();
  var minutesNow = myDate.getMinutes();
  if (minutesNow < 10) {
    minutesNow = '0' + parseInt(minutesNow)
  }

  /*Get hours and minutes for sunirse */
  epoch = parseInt(sunrise);
  myDate = new Date(epoch * 1000);
  var hourRise = myDate.getHours();
  var minutesRise = myDate.getMinutes();
  if (minutesRise < 10) {
    minutesRise = '0' + parseInt(minutesRise)
  }

  /*Get hours and minutes for sunset */
  epoch = parseInt(sunset);
  myDate = new Date(epoch * 1000);
  var hourSet = myDate.getHours();
  var minutesSet = myDate.getMinutes();
  if (minutesSet < 10) {
    minutesSet = '0' + minutesSet
  }

  useEffect(()=>{
    function goldenHour() {
      if (time > sunset) {
        return (getDifference(time, nextSunrise) + ' until Golden Hour.')
      }

      else if (time < sunrise)
      {
        return (getDifference(time, sunrise) + ' until Golden Hour.')
      }
  
      else if ((time > (sunrise + 3600)) && (time < (sunset - 3600))) {
        return (getDifference(time, (sunset - 3600)) + ' until Blue Hour.')
      }
  
      else if ((time > sunrise) && (time <= sunrise + 3600)) {
        return (getDifference(time, sunrise + 3600) + ' left in Golden Hour.')
      }
  
      else {
        return (getDifference(time,sunset) + ' left in Blue Hour.')
      }
  
    }

    setGH(goldenHour())
    
  },[time,nextSunrise,sunrise,sunset])



  function getDifference(current, end) {
    var difference = end - current
    var hours = ~~(difference / 3600)
    var differenceMin = difference - (hours * 3600)
    var minutes = ~~(differenceMin / 60)
    if (difference < 60) {
      return ('Less than a minute')
    }
    else if (difference < 3600) {
      return (minutes + ' minutes')
    }
    else {
      return (hours + ' hours ' + minutes + ' minutes')
    }
  }

  return (
    <div id="TimesTop">
      <table id="TableTime">
        <tbody>
          <tr>
            <th id="Sunrise">Sunrise <br></br> {hourRise}:{minutesRise} </th>
            <th id="CurTime">{hourNow}:{minutesNow}</th>
            <th id="Sunset">Sunset <br></br> {hourSet}:{minutesSet}</th>
          </tr>
        </tbody>
      </table>
      <div id="GoldenHour"> {goldenHour}</div>
    </div>
  )
}

export default TimesTop