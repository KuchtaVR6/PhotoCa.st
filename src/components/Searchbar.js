import { AiOutlineSearch } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

const Searchbar = ({ toggle, showSearchBar, changeLocation, warningSearch }) => {

  const search = (event) => {
    event.preventDefault();
    changeLocation(document.getElementById("city").value)
  }

  //if user presses enter just submit
  const checkEnter = (event) => {
    if(event.key=== 'Enter')
    {
      search(event);
    }
  }

  return (
    <div className={showSearchBar ? 'Searchbar open' : 'Searchbar'}>
      <table id="SearchTable">
        <tbody>
          <tr>
            <th id="SearchCancelTable">
              <button onClick={toggle}>
                <MdCancel />
              </button>
            </th>
            <th id="SearchInputTable">
              <div id="SearchInput">
                <input id="city" type="text" onKeyDown={checkEnter}></input>
              </div>
            </th>
            <th id="SearchComfirmTable">
              <button onClick={search}>
                <AiOutlineSearch />
              </button>
            </th>
          </tr>

        </tbody>
      </table>
      <div className="error" style={{display: warningSearch? "inline" : "none"}}>
            <h3>
              Location not found.
              <br/>
            Please try entering it again.
            </h3>
      </div>
    </div>
  )
}

export default Searchbar