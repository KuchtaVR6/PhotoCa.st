const DawnDusk = ({sunrise,sunset}) => {
  /*Get hours and minutes for dawn */
  var epoch = parseInt(sunrise-1800);
  var myDate = new Date(epoch*1000);
  var hourDawn = myDate.getHours();
  var minutesDawn = myDate.getMinutes();
  if (minutesDawn < 10){
    minutesDawn= '0' + minutesDawn
  }

  /*Get hours and minutes for dusk */
  var epoch = parseInt(sunset+3200);
  var myDate = new Date(epoch*1000);
  var hourDusk = myDate.getHours();
  var minutesDusk = myDate.getMinutes();
  if (minutesDusk < 10){
    minutesDusk= '0' + minutesDusk
  }

    return (
    <div id = "dawndusk">
        <table id ="ddtable">
          <tbody>
            <tr>
                <th id="dawn">Dawn : {hourDawn}:{minutesDawn}</th>
                <th id="ddfiller"></th>
                <th id="dusk">Dusk : {hourDusk}:{minutesDusk}</th>
            </tr>
            </tbody>
        </table>
    </div>
    )
  }
  
  export default DawnDusk
  