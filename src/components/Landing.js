import MoreInfo from './MoreInfo.js'
import Coming from './Coming.js'
import TimesTop from './TimesTop.js'
import Temp from './Temp.js'

import { useState, useEffect } from 'react'

var interval;

const Landing = ({weatherData}) => {
  const[time, setTime] = useState(0)

  useEffect(() => {
    const refreshTime = () => {
      setTime(((new Date()).getTime() / 1000)+weatherData['timezone_offset']);
    }
    clearInterval(interval);
    refreshTime();
    interval = setInterval(refreshTime, 10000)
  },[weatherData]);

  

  return (
    <div id="landing">
      <div id="temperature">
        <Temp textMainTemp={270}/>
      </div>
      <div id="hours">
        <TimesTop time={time} sunrise={weatherData['current']['sunrise']+weatherData['timezone_offset']} sunset={weatherData['current']['sunset']+weatherData['timezone_offset']} nextSunrise={weatherData['daily']['0']['sunrise']+weatherData['timezone_offset']}/>
      </div>
      <MoreInfo weatherData={weatherData}/>
    </div>
  )
}

export default Landing
