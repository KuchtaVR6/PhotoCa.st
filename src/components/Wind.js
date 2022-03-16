const Wind = ({speed,isMetric,direction}) =>{ 
    function calMetric(isMetric){
        if(isMetric){
            return 'Speed: '+speed +'kph'
        }
        else{
            speed=parseInt(speed/1.6)
            return 'Speed: ' + speed + 'mph'
        }
    }

    return (
    <div>
        <div>
        <img className="arrow" src = "https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-right-arrow-icon-png-image_956430.jpg" style={{transform: `rotate(${direction}deg)`}}/>
      </div>
      <div className="wind">Wind:<br></br></div>

      <div className="windspeed">{calMetric()}<br></br></div>

    </div>

    )
  }

  export default Wind