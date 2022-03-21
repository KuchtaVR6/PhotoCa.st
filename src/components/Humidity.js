const Humidity = ({humidity,visibility,cloud,isMetric}) => {

    var length;
    //change the length based on metric parameter
    if(isMetric)
    {
        length = visibility + 'm';
    }
    else
    {
        length = parseInt(parseInt(visibility)*3.28084) + 'ft'
    }

    return (
    <div id="float-container">
        <div id="float-child">
            <div className="currhumidity">Humidity: <b>{humidity}%</b> <br></br>
            Visibility: <b>{length}</b></div>  
        </div>
        <div id="float-child">
            <div className="cloud">Cloud cover:<br></br><b>{cloud}%</b></div>
        </div>
    </div>

    )}
  
  export default Humidity
