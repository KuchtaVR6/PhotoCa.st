
const Wind = ({speed,isMetric,direction}) => {
  return (
    <div>
      <img className="arrow" src = "https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-right-arrow-icon-png-image_956430.jpg" style={{transform: `rotate(${direction}deg)`}}/>
    </div>
  )
}

export default Wind
