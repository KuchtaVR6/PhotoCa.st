import Humidity from './Humidity.js'
import Exposure from './Exposure.js'
import DawnDusk from './DawnDusk.js'
import Wind from './Wind.js'
import Moonphase from './Moonphase.js'

const MoreInfo = ({weatherData,isMetric}) => {
  return (
    <div id="moreinfo">
      <span className="scrollDown">↓&nbsp;&nbsp;&nbsp;&nbsp;Scroll Down&nbsp;&nbsp;&nbsp;&nbsp;↓</span>
      <div className="linesInfo">
        <DawnDusk sunrise={weatherData['current']['sunrise']+weatherData['timezone_offset']} sunset={weatherData['current']['sunset']+weatherData['timezone_offset']}/><br/>
      </div>

      <Exposure cloudCover={weatherData['current']['clouds']}/>
      
      <div className="blockInfo">
        <Moonphase phase={weatherData['daily'][0]['moon_phase']} lat={weatherData['lat']}/>
      </div>

      <div className="linesInfo">
        <Humidity humidity={weatherData['current']['humidity']} cloud={weatherData['current']['clouds']} visibility={weatherData['current']['visibility']} isMetric={isMetric}/> 
      </div>
      <br/>

      <div className="blockInfo">
        <Wind speed={weatherData['current']['wind_speed']} isMetric={isMetric} direction={weatherData['current']['wind_deg']+90}/>
      </div>

      <div>
        <br/>
        <br/>
        <br/>
        <hr/>
        <br/>
        <b>Copyright &copy; 2022</b>
        <h5>
          Patryk Kuchta, Alexis S. C. Menard, Navid Satar <br/>
          Jhanvi Mann, Mohammed Raaid Ali
        </h5>
      </div>

    </div>
  )
}

export default MoreInfo
