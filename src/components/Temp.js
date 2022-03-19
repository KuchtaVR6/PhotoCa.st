const Temp = ({ normalTemp, lowTemp, highTemp, isMetric, status }) => {
    var textMainTemp;
    var textLowTemp;
    var textHighTemp;

    if (isMetric) {
        textMainTemp = Math.round(normalTemp - 273) + "°C"
        textLowTemp = Math.round(lowTemp - 273) + "°C"
        textHighTemp = Math.round(highTemp - 273) + "°C"

    }
    else {
        textMainTemp = Math.round((normalTemp - 273) * 1.8 + 32) + "°F"
        textLowTemp = Math.round((lowTemp - 273) * 1.8 + 32) + "°F"
        textHighTemp = Math.round((highTemp - 273) * 1.8 + 32) + "°F"
    }
    return (
        <div id="mainTemp">
            <div className="secondary">
                <span className="hot">{textHighTemp}</span> <br/>
                <span className="cold">{textLowTemp}</span>
            </div>

            <div className="main">{textMainTemp}</div>

            <div className="status">{status}</div>
        </div>

    )



}



export default Temp