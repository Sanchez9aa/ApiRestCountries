import Header from "../header/Header";
import Toggle from '../toggle/Toggle'
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import getApi from "../../services/getApi";
import CountryCardPage from "../countryCardPage/CountryCardPage";


const CountryPage = () => {
  const [data, setData] = useState();
  const country = useParams().country;

  useEffect(() => {
    getApi.getCountryByName(country, setData);
  }, [country]);

  return (
    <>
      <Toggle />
      <Header />
      <CountryCardPage data={data} />
    </>
  );
};

export default CountryPage;
