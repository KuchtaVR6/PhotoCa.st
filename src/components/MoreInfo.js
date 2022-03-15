import Coming from './Coming.js'
import Humidity from './Humidity.js'
import Exposure from './Exposure.js'
import DawnDusk from './DawnDusk.js'
import Wind from './Wind.js'

const MoreInfo = ({weatherData,isMetric}) => {
  return (
    <div id="moreinfo">
      ________________________________________________
      <div className="linesInfo">
        <DawnDusk sunrise={weatherData['current']['sunrise']+weatherData['timezone_offset']} sunset={weatherData['current']['sunset']+weatherData['timezone_offset']}/><br/>
        <Exposure cloudCover={weatherData['current']['clouds']}/>
      </div>
      <br/>
      <div className="blockInfo">
        <Coming name="Jhanvi" due="4.03" />
      </div>

      <div className="linesInfo">
        <Humidity humidity={weatherData['current']['humidity']} cloud={weatherData['current']['clouds']} visibility={weatherData['current']['visibility']} isMetric={isMetric}/> 
      </div>
      <br/>

      <div className="blockInfo">
        <Wind speed={20} isMetric={true} direction={190}/>
      </div>

      <div>
        <hr/>
        <b>Copyright &copy;</b>
        <h5>Patryk Kuchta, Alexis S. C. Menard, Navid Satar</h5>
      </div>

    </div>
  )
}

export default MoreInfo
