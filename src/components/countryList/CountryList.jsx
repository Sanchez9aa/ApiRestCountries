import "./countryList.css";
import CountryCard from "../countryCard/CountryCard";
import { useState, useEffect } from "react";
import getApi from "../../services/getApi";

const CountryList = ({ search }) => {
  const [countries, setCountries] = useState([]);
  const [countriesSearched, setCountriesSearched] = useState([]);
  const [countriesBoth, setCountriesBoth] = useState([]);

  useEffect(() => {
    getApi.getAllCountries(setCountries);
  }, []);

  useEffect(() => {
    if (search.input !== "" && search.select === "") {
      const filterCountry = countries.filter(
        (x) =>
          x.name.common.toLowerCase().indexOf(search.input.toLowerCase()) > -1
      );
      setCountriesSearched(filterCountry);
    }else if (search.input === "" && search.select !== "") {
      const filterCountry = countries.filter(
        (x) =>
          x.region.toLowerCase().indexOf(search.select.toLowerCase()) > -1
      );
      setCountriesSearched(filterCountry);
    } else if (search.select !== "" && search.input !== "") {
      const filterRegion = countriesSearched.filter(x => x.region.toLowerCase().indexOf(search.select.toLowerCase()) > -1)
      console.log(filterRegion)
      const filterCountry = filterRegion.filter(
        (x) => x.name.common.toLowerCase().indexOf(search.input.toLowerCase()) > -1
      );
      console.log(filterCountry)
      setCountriesBoth(filterCountry);
    }
  }, [search]);

  return (
    <>
      {search.select === "" && search.input === "" ? (
        <div className="cl">
          <div className="cl-wrapper">
            {countries.map((x) => (
              <CountryCard
                key={x.name.common}
                name={x.name.common}
                flag={x.flags.png}
                population={x.population}
                region={x.region}
                capital={x.capital}
              />
            ))}
          </div>
        </div>
      ) : search.select !== "" && search.input !== "" ? (
        <div className="cl">
          <div className="cl-wrapper">
            {countriesBoth.map((x) => (
              <CountryCard
                key={x.name.common}
                name={x.name.common}
                flag={x.flags.png}
                population={x.population}
                region={x.region}
                capital={x.capital}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="cl">
          <div className="cl-wrapper">
            {countriesSearched.map((x) => (
              <CountryCard
                key={x.name.common}
                name={x.name.common}
                flag={x.flags.png}
                population={x.population}
                region={x.region}
                capital={x.capital}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default CountryList;
