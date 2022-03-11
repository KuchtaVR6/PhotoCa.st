import "./App.css";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {useEffect, useRef, useState} from "react";

import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

import Home from "./components/Home.js";
import Forecast from "./components/Forecast.js";
import Map from "./components/Map.js";
import Topbar from "./components/Topbar.js";
import Sidebar from "./components/Sidebar.js";
import { ImSearch } from "react-icons/im";

function App() {

    const[lati, setLati] = useState(0)
    const[long, setLong] = useState(0)

    const getJSONWeather = async () => {
        console.log(lati,long)
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=51.25&lon=0&cnt=7&appid=c771b4a71a2bb5a57117433fcf3558dd`;
        const response = await fetch(url);
        return await (await response.json());
    }

    const [isMetric, setIsMetric] = useState(true);
    const [largeFont, setLF] = useState(false);
    const [showSidebar, setSidebar] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    const initRender = useRef(true)

    useEffect( () => {
        const fetchData = async () => {
            const weather = await getJSONWeather()
            setWeatherData(weather)
        }
        if (initRender.current) {
            fetchData();
            initRender.current = false
        }else{
            //inserting the labels into the buttons
            var buttons = document.querySelectorAll("[aria-label=\"Go to slide 1\"]");
            var text = document.createTextNode("Home");
            if (!buttons[0].hasChildNodes()) {
                buttons[0].appendChild(text);
            }

            buttons = document.querySelectorAll("[aria-label=\"Go to slide 2\"]");
            text = document.createTextNode("Forecast");
            if (!buttons[0].hasChildNodes()) {
                buttons[0].appendChild(text);
            }

            buttons = document.querySelectorAll("[aria-label=\"Go to slide 3\"]");
            text = document.createTextNode("Map");
            if (!buttons[0].hasChildNodes()) {
                buttons[0].appendChild(text);
            }
        }
    });

    const toggleSide = () => {
        setSidebar(!showSidebar);
    };

    const setMetric = () =>{
        setIsMetric(true);
    };

    const setWrong = () =>{
        setIsMetric(false);
    };

    const toggleLF = () =>{
        setLF(!largeFont);
    }


    if(initRender.current){
        return (
            <div id="loading">
            </div>
        )
    }

    return (
        <div className={largeFont? "App largeFont":"App"}>
            <Topbar toggle={toggleSide}/>
            <Sidebar 
                showSidebar={showSidebar} 
                toggle={toggleSide} 
                toggleMetric={setMetric} 
                toggleImperial={setWrong} 
                isMetric={isMetric}
                toggleLF={toggleLF} 
                isLF={largeFont} 
            />
            <Splide
                options={{
                    arrows: false,
                    pagination: true,
                }}
            >
                <SplideSlide>
                    <Home weatherData={weatherData} isMetric={isMetric}/>
                </SplideSlide>
                <SplideSlide>
                    <Forecast/>
                </SplideSlide>
                <SplideSlide>
                    <Map/>
                </SplideSlide>
            </Splide>
        </div>
    );
}

export default App;
