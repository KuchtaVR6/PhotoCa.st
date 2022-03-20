import "./App.css";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {useEffect, useRef, useState} from "react";

import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

import Home from "./components/Home.js";
import Forecast from "./components/Forecast.js";
import Map from "./components/Map.js";
import Topbar from "./components/Topbar.js";
import Searchbar from "./components/Searchbar.js";
import Sidebar from "./components/Sidebar.js";

function App() {
    const getJSONLocation = async (query) => {
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=c771b4a71a2bb5a57117433fcf3558dd`;
        const response = await fetch(url);
        return await (await response.json());
    }

    const getJSONWeather = async (query) => {
        const loc = await getJSONLocation(query);
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${loc["0"]["lat"]}&lon=${loc["0"]["lon"]}&cnt=7&appid=c771b4a71a2bb5a57117433fcf3558dd`;
        const response = await fetch(url);
        return await (await response.json());
    }

    const [isMetric, setIsMetric] = useState(true);
    const [largeFont, setLF] = useState(false);
    const [showSidebar, setSidebar] = useState(false);
    const [showSearchBar, setSearchBar] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    const initRender = useRef(true)

    const fetchData = async (query) => {
        const weather = await getJSONWeather(query)
        setWeatherData(weather)
    }

    useEffect( () => {
        if(initRender.current){
            fetchData("London");
            initRender.current = false;
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

    const toggleSearch = (event) => {
        event.preventDefault();
        setSearchBar(!showSearchBar)
    }

    const toggleSearchNoArg = () => {
        setSearchBar(!showSearchBar)
    }

    const changeLocation = async (query) => {
        toggleSearchNoArg();
        await fetchData(query);
    }

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
            <Topbar toggle={toggleSide}
                    toggleSearch={toggleSearch}/>
            <Searchbar 
                toggle={toggleSearch} 
                showSearchBar={showSearchBar}
                changeLocation={changeLocation}/>
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
                    <Forecast weatherData={weatherData} isMetric={isMetric}/>
                </SplideSlide>
                <SplideSlide>
                    <Map/>
                </SplideSlide>
            </Splide>
        </div>
    );
}

export default App;
