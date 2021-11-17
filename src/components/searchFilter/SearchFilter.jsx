import "./searchFilter.css";
import Search from "../../assets/imgs/search.png";
import { useState } from "react";
import CountryList from "../countryList/CountryList";

const SearchFilter = () => {

  const [search, setSearch] = useState("");
  

  const handleChange = async (e) => {
    setSearch(e.target.value)
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
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="sf-rigth">
            <select name="" className="sf-rigth-filter">
              <option style={{ display: "none" }} disabled selected>
                Filter by Region
              </option>
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
