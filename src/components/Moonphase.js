import React from 'react'

const Moonphase = ({ phase, lat }) => {
    const phaseName = (index, offset) => {
        //if location is in the southern hemisphere the moonphases happen from "the other side" 
        var south = (lat < 0)
        var classN
        if (offset === 0) {
            classN = "main moon"
        }
        else {
            classN = "secondary moon"
        }
        index = parseInt((index % 1) * 29) + offset
        console.log(index)
        if (index === 0) {
            return (<img className={classN} alt="newMoon" src="lunar/newMoon.svg"></img>)
        }
        else if (index < 7) {
            return (<img className={classN} alt="QuarterMoon" style={{ transform: `rotate(${south ? 180 : 0}deg)` }} src="lunar/darkQuarter.svg"></img>)
        }
        else if (index === 7) {
            return (<img className={classN} alt="halfMoon" style={{ transform: `rotate(${south ? 180 : 0}deg)` }} src="lunar/halfMoon.svg"></img>)
        }
        else if (index <= 14) {
            return (<img className={classN} alt="QuarterMoon" style={{ transform: `rotate(${south ? 180 : 0}deg)` }} src="lunar/lightQuarter.svg"></img>)
        }
        else if (index === 15) {
            return (<img className={classN} alt="fullMoon" src="lunar/fullMoon.svg"></img>)
        }
        else if (index <= 22) {
            return (<img className={classN} alt="QuarterMoon" style={{ transform: `rotate(${south ? 0 : 180}deg)` }} src="lunar/lightQuarter.svg"></img>)
        }
        else if (index === 22) {
            return (<img className={classN} alt="halfMoon" style={{ transform: `rotate(${south ? 0 : 180}deg)` }} src="lunar/halfMoon.svg"></img>)
        }
        else if (index <= 29) {
            return (<img className={classN} alt="QuarterMoon" style={{ transform: `rotate(${south ? 0 : 180}deg)` }} src="lunar/darkQuarter.svg"></img>)
        }
    }
    return (
        <div className='box'>
            <table>
                <tbody>
                    <tr>
                        <th>
                            <div style={{ float: "left" }}>
                                Today
                                {phaseName(phase, 0)}
                            </div>

                        </th>
                        <th>
                            <div className='header' style={{ float: "right" }}>
                                Moonphase:
                                <div className='reduce'>Next 3 days</div>
                                {phaseName(phase, 1)}
                                {phaseName(phase, 2)}
                                {phaseName(phase, 3)}
                            </div>
                        </th>
                    </tr>
                </tbody>
            </table>





        </div>
    )
}

export default Moonphase
