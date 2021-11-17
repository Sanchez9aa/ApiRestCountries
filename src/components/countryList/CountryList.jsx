import "./countryList.css";
import CountryCard from "../countryCard/CountryCard";
import { useState, useEffect } from "react";
import getApi from "../../services/getApi";

const CountryList = ({ search }) => {
  const [countries, setCountries] = useState([]);
  const [countriesSearched, setCountriesSearched] = useState();

  useEffect(() => {
    if (search === "") {
      getApi.getAllCountries(setCountries);
    }
  }, [search]);

  useEffect(() => {
    const filterCountry = countries.filter(
      (x) => x.name.common.toLowerCase().indexOf(search.toLowerCase()) > -1
    );
    setCountriesSearched(filterCountry);
  }, [search]);

  return (
    <>
      {countriesSearched === undefined || search === "" ? (
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
