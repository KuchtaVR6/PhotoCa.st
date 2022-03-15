import Coming from './Coming.js'
import Humidity from './Humidity.js'
import Exposure from './Exposure.js'
import DawnDusk from './DawnDusk.js'

const MoreInfo = ({weatherData}) => {
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
        <Humidity humidity={weatherData['current']['humidity']} cloud={weatherData['current']['clouds']} visibility={weatherData['current']['visibility']}/> 
      </div>
      <br/>

      <div className="blockInfo">
        <Coming name="Mohammed" due="4.03" comment={"isMetric : boolean"}/>
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
