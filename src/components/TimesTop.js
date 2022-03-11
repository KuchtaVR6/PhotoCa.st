

const TimesTop = ({ sunrise, sunset, nextSunrise }) => {
  /*Get hours and minutes for current time */
  var myDate = new Date();
  var time = myDate.getTime() / 1000;
  var hourNow = myDate.getHours();
  var minutesNow = myDate.getMinutes();
  if (minutesNow < 10) {
    minutesNow = '0' + minutesNow
  }

  /*Get hours and minutes for sunirse */
  var epoch = parseInt(sunrise);
  var myDate = new Date(epoch * 1000);
  var hourRise = myDate.getHours();
  var minutesRise = myDate.getMinutes();
  if (minutesRise < 10) {
    minutesRise = '0' + parseInt(minutesRise)
  }

  /*Get hours and minutes for sunset */
  var epoch = parseInt(sunset);
  var myDate = new Date(epoch * 1000);
  var hourSet = myDate.getHours();
  var minutesSet = myDate.getMinutes();
  if (minutesSet < 10) {
    minutesSet = '0' + minutesSet
  }

  function goldenHour() {
    if ((time > sunset) || (time < sunrise)) {
      return (getDifference(time, nextSunrise) + ' until Golden Hour.')
    }

    else if ((time > (sunrise + 3600)) && (time < (sunset - 3600))) {
      return (getDifference(time, (sunset - 3600)) + ' until Blue Hour.')
    }

    else if ((time > sunrise) && (time <= sunrise + 3600)) {
      return (getDifference(time, sunrise + 3600) + ' left in Golden Hour.')
    }

    else {
      return (getDifference(time, sunset - 3600) + ' left in Blue Hour.')
    }

  }

  function getDifference(current, end) {
    var difference = end - current
    var hours = ~~(difference / 3600)
    var differenceMin = difference - (hours * 3600)
    var minutes = ~~(differenceMin / 60)
    if (difference < 3600) {
      return (minutes + ' minutes')
    }
    else {
      return (hours + ' hours ' + minutes + ' minutes')
    }
  }

  return (
    <div id="TimesTop">
      <table id="TableTime">
        <tbody>
          <tr>
            <th id="Sunrise">Sunrise <br></br> {hourRise}:{minutesRise} </th>
            <th id="CurTime">{hourNow}:{minutesNow}</th>
            <th id="Sunset">Sunset <br></br> {hourSet}:{minutesSet}</th>
          </tr>
        </tbody>
      </table>
      <div id="GoldenHour"> {goldenHour()}</div>
    </div>
  )
}

export default TimesTop