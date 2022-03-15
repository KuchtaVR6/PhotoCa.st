import Landing from './Landing.js'


const Home = ({weatherData,isMetric}) => {
  return (
    <div className="page home">
      <Landing weatherData={weatherData} isMetric={isMetric}/>
    </div>
  )
}

export default Home
