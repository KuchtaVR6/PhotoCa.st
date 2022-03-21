const Map = () => {
  return (
    <div className="page map">
      <div id="topbar"/>
      <div>Cloud cover map</div>
      <iframe 
        width="100%" 
        frameBorder="0" 
        title="Common picturesque places"
        src="https://embed.windy.com/embed2.html?lat=51.026&lon=-0.03&detailLat=53.733&detailLon=-9.345&width=650&height=450&zoom=9&level=surface&overlay=clouds&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
      >
      </iframe>

    </div>
  )
}

export default Map