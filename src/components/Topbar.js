import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

const Topbar = ({toggle,toggleSearch}) => {
  return (
    <div id="topbar">
        <button id="sidebarButton" onClick={toggle}>
            <AiOutlineBars/>
        </button>
        <button id="search" onClick={toggleSearch}>
            <AiOutlineSearch/>
        </button>
    </div>
  )
}

export default Topbar