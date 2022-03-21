const Exposure = ({cloudCover}) => {
    
    //calculate the recommended expouse using this formula
    var exposure = parseInt((-104/1000)*cloudCover + 16);
    
   return(
      <div>
        Recommended Exposure: f/{exposure}
      </div>
    )
  }
  
  export default Exposure
  