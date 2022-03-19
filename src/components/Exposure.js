const Exposure = ({cloudCover}) => {
    
    var exposure = parseInt((-104/1000)*cloudCover + 16);
    
   return(
      <div>
        Recommended Exposure: f/{exposure}
      </div>
    )
  }
  
  export default Exposure
  