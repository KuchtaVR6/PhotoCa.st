const Humidity = ({humidity,visibility,cloud}) => {
    return (
    <div id="float-container">
        <div id="float-child">
            <div className="humidity">Humidity: <b>{humidity}%</b> <br></br>
            Visibility: <b>{visibility}m</b></div>  
        </div>
        <div id="float-child">
            <div className="cloud">Cloud cover:<br></br><b>{cloud}%</b></div>
        </div>
    </div>

    )}
  
  export default Humidity
