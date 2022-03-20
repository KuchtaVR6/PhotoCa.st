import { AiOutlineSearch } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

const Searchbar = ({ toggle, showSearchBar, changeLocation }) => {

  const search = (event) => {
    event.preventDefault();
    changeLocation(document.getElementById("city").value)
  }

  return (
    <form className={showSearchBar ? 'Searchbar open' : 'Searchbar'}>
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
                <input id="city" type="text"></input>
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
    </form>
  )
}

export default Searchbar