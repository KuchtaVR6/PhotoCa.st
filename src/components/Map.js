const Map = () => {
  return (
    <div className="page map">
      <p></p>
      <iframe 
        width="100%" 
        frameborder="0" 
        title="Common picturesque places"
        src="https://embed.windy.com/embed2.html?lat=52.866&lon=0.842&detailLat=52.160&detailLon=-2.109&width=650&height=450&zoom=5&level=surface&overlay=clouds&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
      >
        <h5>
        Common picturesque places
        </h5>
      </iframe>

    </div>
  )

  //http://umap.openstreetmap.fr/en/map/anonymous-edit/731285:68qGuBwWglT37Ir5h82bDd3Y0MA
}

export default Map
