import 'react-pro-sidebar/dist/css/styles.css';
import { FaLanguage } from "react-icons/fa";
import { BsThermometerHalf } from "react-icons/bs";
import { ImAccessibility } from "react-icons/im";
import { IoMdArrowBack } from "react-icons/io";

const Sidebar = ({ showSidebar, toggle, toggleMetric, toggleImperial, toggleLF, isMetric, isLF}) => {

    //as we don't have frech support (yet) in redirect to an image 
    const redirectFrench = () => {
        window.location='https://media.istockphoto.com/vectors/coming-soon-french-rubber-stamp-vector-id1272170898?k=20&m=1272170898&s=170667a&w=0&h=u483hsEbQCns0Wcq6tDI7OmJbLhmByyTazpLX_fHLgE='
    }

    return (
        <div className={showSidebar ? 'sidebar open' : 'sidebar'}>
            <div className='proper'>
                <img src="logo.svg" alt="photocast logo" />
                <div className='label'>
                    <BsThermometerHalf />
                    <br />
                    Units of Measurement
                    <button onClick={toggleMetric} id={isMetric? "selected":""}>Metric</button>
                    <br/>
                    <button onClick={toggleImperial} id={isMetric? "":"selected"}>Imperial</button>
                </div>
                <div className='label'>
                    <ImAccessibility />
                    <br />
                    Accessibility Settings
                    <button onClick={toggleLF} id={isLF? "selected":""}>Enlarge Font</button>
                </div>
                <div className='label'>
                    <FaLanguage />
                    <br />
                    Language Settings
                    <button id="selected">English</button>
                    <br/>
                    <button onClick={redirectFrench}>Française</button>
                </div>

                <button id="closeSmall" onClick={toggle}><IoMdArrowBack/></button>
            </div>
            <button id="close" onClick={toggle} />
        </div>
    )
}

export default Sidebar
