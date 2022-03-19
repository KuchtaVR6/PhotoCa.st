import {AiOutlineCloud} from "react-icons/ai";
import {BsSunrise} from "react-icons/bs";
import {BsSunset} from "react-icons/bs";
import {BsSpeedometer2} from "react-icons/bs";
import {WiHumidity} from "react-icons/wi";
import {AiOutlineEye} from "react-icons/ai";
import {BsCloudRainHeavy} from "react-icons/bs"
import {FaTemperatureLow} from "react-icons/fa"

const NextDay = ({data,isMetric,nday}) => {

    return (
      <div class="coming">
        <div class="coming-child">
        <div id ="current_date">{nday}</div>
        <AiOutlineCloud/>
      <div id="float-container">
          <div id="float-child">

          <div class="temperature">
        <FaTemperatureLow/>
        {data['temp']['min']} 
        </div>
          <div class="precipitation">
        <BsCloudRainHeavy/>
          </div>
          <div class="sunrise">
        <BsSunrise/>
          </div>

      </div>
        <div id="float-child">
          <div class="speed">
            <BsSpeedometer2/> 
          </div>
          <div class="humidity">
          <AiOutlineEye/>
          </div>
          <div class="sunset">
          <BsSunset/>
          </div>
      </div>

      </div>
          </div>
      </div>
    )
  }
  export default NextDay 