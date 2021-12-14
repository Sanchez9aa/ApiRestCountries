import "./countryCardPage.css";
import { Link } from "react-router-dom";
import BorderCountry from "../borderCountry/BorderCountry";
import { ArrowLeft } from "react-feather";
import { useContext } from "react";
import { DarkContext} from "../../contextApi";

const CountryCardPage = ({ data }) => {
  const dark = useContext(DarkContext)

  return (
    <>
      {data ? (
        <div className={!dark.state.darkmode ? "cp" : "cp darkBG"}>
          <div className="cp-wrapper">
            <div className={!dark.state.darkmode ? "cp-back" : "cp-back shadow darkEL" }>
              <Link to={"/"}>
                <ArrowLeft color={!dark.state.darkmode ? "black" : "white"} />
                <span className={!dark.state.darkmode ? null : "darkColor"}> Back </span>
              </Link>
            </div>

            <div className="cp-country">
              <div className="cp-img">
                <img
                  src={data.flags.png}
                  alt={`Flag of ${data.name?.common} `}
                />
              </div>
              <div className="cp-info">
                <h1 className={!dark.state.darkmode ? "cp-title" : "cp-title darkColor"}>{data.name?.common}</h1>
                <div className="cp-moreInfo">
                  <div className="cp-moreInfo1">
                    <ul>
                      <li className={!dark.state.darkmode ? null : "darkColor"}>
                        <strong className={!dark.state.darkmode ? null : "darkColor"}>Native Name:</strong> {data.name?.official}
                      </li>
                      <li className={!dark.state.darkmode ? null : "darkColor"}>
                        <strong className={!dark.state.darkmode ? null : "darkColor"}>Population:</strong>{" "}
                        {data.population.toLocaleString()}
                      </li>
                      <li className={!dark.state.darkmode ? null : "darkColor"}>
                        <strong className={!dark.state.darkmode ? null : "darkColor"}>Region:</strong> {data.region}
                      </li>
                      <li className={!dark.state.darkmode ? null : "darkColor"}>
                        <strong className={!dark.state.darkmode ? null : "darkColor"}>Sub Region:</strong> {data.subregion}
                      </li>
                      <li className={!dark.state.darkmode ? null : "darkColor"}>
                        <strong className={!dark.state.darkmode ? null : "darkColor"}>Capital:</strong> {data.capital}
                      </li>
                    </ul>
                  </div>
                  <div className="cp-moreInfo2">
                    <ul>
                      <li className={!dark.state.darkmode ? null : "darkColor"}>
                        <strong className={!dark.state.darkmode ? null : "darkColor"}>Top Level Domain:</strong> {data.tld}
                      </li>
                      <li className={!dark.state.darkmode ? null : "darkColor"}>
                        <strong className={!dark.state.darkmode ? null : "darkColor"}>Currencies:</strong>{" "}
                        {Object.values(data.currencies).map(
                          (x) => `${x.name} `
                        )}
                      </li>
                      <li className={!dark.state.darkmode ? null : "darkColor"}>
                        <strong className={!dark.state.darkmode ? null : "darkColor"}>Languages:</strong>{" "}
                        {Object.values(data.languages)
                          .map((x) => x)
                          .join(", ")}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="cp-moreCountries">
                  <span>
                    <strong className={!dark.state.darkmode ? null : "darkColor"}>Border Countries:</strong>
                  </span>

                  { !data.borders 
                  ? <BorderCountry countries={null} />
                  : 
                  data.borders.map((x) => (
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

export default CountryCardPage;
