import "./searchFilter.css";
import Search from "../../assets/imgs/search.png";
import { useState } from "react";
import CountryList from "../countryList/CountryList";
import { useContext } from "react";
import {DarkContext} from '../../contextApi'

const SearchFilter = () => {

  const dark = useContext(DarkContext)

  const searchInitState = {
    input: "",
    select: ""
  }
  const [search, setSearch] = useState(searchInitState)

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
          <div className={dark.state.darkmode ? "sf-left" : "sf-left darkEL shadow"}>
            <img src={Search} alt="Icono de una lupa" />
            <input
              type="text"
              className={dark.state.darkmode ? "sf-left-search" : "sf-left-search" }
              placeholder="Search for a country..."
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className={dark.state.darkmode ? "sf-rigth" : "sf-rigth darkEL shadow"}>
            <select name="" onChange={(e) => handleSelectChange(e)} className={dark.state.darkmode ? "sf-rigth-filter" : "sf-rigth-filter darkColor active"}>
              <option style={{ display: "none" }} disabled selected>
                Filter by Region
              </option>
              <option className={dark.state.darkmode ? "" : "darkEL darkColor"} value=""></option>
              <option className={dark.state.darkmode ? "" : "darkEL darkColor"} value="Africa">Africa</option>
              <option className={dark.state.darkmode ? "" : "darkEL darkColor"} value="America">America</option>
              <option className={dark.state.darkmode ? "" : "darkEL darkColor"} value="Asia">Asia</option>
              <option className={dark.state.darkmode ? "" : "darkEL darkColor"} value="Europe">Europe</option>
              <option className={dark.state.darkmode ? "" : "darkEL darkColor"} value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
      </div>
      <CountryList search={search} />
    </>
  );
};

export default SearchFilter;
