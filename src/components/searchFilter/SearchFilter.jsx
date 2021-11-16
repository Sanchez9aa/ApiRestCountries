import "./searchFilter.css"
import Search from '../../assets/imgs/search.png'

const SearchFilter = () => {
  return (
    <div className="sf">
      <div className="sf-wrapper">
        <div className="sf-left">
          <img src={Search} alt="" />
          <input 
            type="text" 
            className="sf-left-search" 
            placeholder="Search for a country..." />
        </div>
        <div className="sf-rigth">
          <select name="" className="sf-rigth-filter">
            <option style={{display: "none"}} disabled selected>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default SearchFilter