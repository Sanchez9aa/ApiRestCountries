import "./countryPage.css";
import Header from "../header/Header";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import getApi from "../../services/getApi";
import { Link } from "react-router-dom";
import BorderCountry from "../borderCountry/BorderCountry";

const CountryPage = () => {
  const [data, setData] = useState();
  const country = useParams().country;

  useEffect(() => {
    getApi.getCountryByName(country, setData);
  }, [country]);

  return (
    <>
      <Header />
      {data ? (
        <div className="cp">
          <div className="cp-wrapper">
            <div className="cp-back">
              <Link to={"/"}>Back</Link>
            </div>
            <div className="cp-country">
              <div className="cp-img">
                <img
                  src={data.flags.png}
                  alt={`Bandera de ${data.name?.common} `}
                />
              </div>
              <div className="cp-info">
                <h2 className="cp-title">{data.name?.common}</h2>
                <div className="cp-moreInfo">
                  <div className="cp-moreInfo1">
                    <ul>
                      <li>
                        <strong>Native Name:</strong> {data.name?.official}
                      </li>
                      <li>
                        <strong>Population:</strong> {data.population.toLocaleString()}
                      </li>
                      <li>
                        <strong>Region:</strong> {data.region}
                      </li>
                      <li>
                        <strong>Sub Region:</strong> {data.subregion}
                      </li>
                      <li>
                        <strong>Capital:</strong> {data.capital}
                      </li>
                    </ul>
                  </div>
                  <div className="cp-moreInfo2">
                    <ul>
                      <li>
                        <strong>Top Level Domain:</strong> {data.tld}
                      </li>
                      <li>
                        <strong>Currencies:</strong>{" "}
                        {Object.values(data.currencies).map(
                          (x) => `${x.name} `
                        )}
                      </li>
                      <li>
                        <strong>Languages:</strong>{" "}
                        {Object.values(data.languages).map((x) => x).join(', ')}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="cp-moreCountries">
									<span><strong>Border Countries: </strong></span>
                  {data.borders.map((x) => (
										<BorderCountry key={x} countries={x} />
									))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CountryPage;
