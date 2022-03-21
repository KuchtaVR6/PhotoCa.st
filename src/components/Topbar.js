import { FiSettings } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";

const Topbar = ({toggle,toggleSearch}) => {
  return (
    <div id="topbar">
        <button id="sidebarButton" onClick={toggle}>
            <FiSettings/>
        </button>
        <button id="search" onClick={toggleSearch}>
            <AiOutlineSearch/>
        </button>
    </div>
  )
}

export default Topbar