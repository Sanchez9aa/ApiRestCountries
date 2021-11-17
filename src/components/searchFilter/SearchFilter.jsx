import "./searchFilter.css";
import Search from "../../assets/imgs/search.png";
import { useState } from "react";
import CountryList from "../countryList/CountryList";

const SearchFilter = () => {
  const searchInitState = {
    input: "",
    select: ""
  }
  const [search, setSearch] = useState(searchInitState);

  
  

  const handleInputChange = (e) => {
    setSearch({...search, input: e.target.value})
    console.log(search)
  }

  const handleSelectChange = (e) => {
    setSearch({...search, select: e.target.value})
    console.log(search)
  } 

  return (
    <>
        <div className="sf">
        <div className="sf-wrapper">
          <div className="sf-left">
            <img src={Search} alt="Icono de una lupa" />
            <input
              type="text"
              className="sf-left-search"
              placeholder="Search for a country..."
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="sf-rigth">
            <select name="" onChange={(e) => handleSelectChange(e)} className="sf-rigth-filter">
              <option style={{ display: "none" }} disabled selected>
                Filter by Region
              </option>
              <option value=""></option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
      </div>
      <CountryList search={search} />
    </>
  );
};

export default SearchFilter;
