const Wind = ({ speed, isMetric, direction }) => {

    //return the speed based on the isMetric parameter
    function calMetric() {
        if (isMetric) {
            return 'Speed: ' + speed + 'kph'
        }
        else {
            var aspeed = parseInt(speed / 1.6)
            return 'Speed: ' + aspeed + 'mph'
        }
    }

    //return the wind type based on the speed
    function windType() {
        if (speed < 2) {
            return 'Wind Type: Calm'
        }
        else if (speed >= 2 && speed < 6) {
            return 'Wind Type: Light breeze'
        }
        else if (speed >= 6 && speed < 11) {
            return 'Wind Type: Gentle breeze'
        }
        else if (speed >= 11 && speed < 20) {
            return 'Wind Type: Moderate breeze'
        }
        else if (speed >= 20 && speed < 28) {
            return 'Wind Type: Fresh breeze'
        }
        else if (speed >= 28 && speed < 50) {
            return 'Wind Type: Strong breeze'
        }
        else if (speed >= 50 && speed < 62) {
            return 'Wind Type: High wind'
        }
        else if (speed >= 62 && speed < 75) {
            return 'Wind Type: Gale'
        }
        else if (speed >= 75 && speed < 88) {
            return 'Wind Type: String gale'
        }
        else if (speed >= 88 && speed < 102) {
            return 'Wind Type: Storm'
        }
        else if (speed >= 102 && speed < 117) {
            return 'Wind Type: Voilent Storm'
        }
        else {
            return 'Wind Type: Hurricane'
        }

    }

    return (
        <div className="box">

            <img className="arrow" src="/windarrow.png" alt={`wind arrow pointing at ${direction}`} style={{ transform: `rotate(${direction}deg)` }} />

            <div className="header">Wind:<br></br></div>

            <div className="windspeed">{calMetric()}<br></br></div>

            <div className="windtype">{windType()}<br></br></div>

        </div>
    )
}

export default Wind