import Header from "../header/Header";
import SearchFilter from "../searchFilter/SearchFilter";
import Toggle from "../toggle/Toggle";
import { useContext } from "react";
import { DarkContext } from "../../contextApi";

const Home = () => {
  const dark = useContext(DarkContext);

  return (
    <>
      <Toggle />
      <Header />
      <div className={dark.state.darkmode ? null : "darkBG"}>
        <SearchFilter />
      </div>
    </>
  );
};

export default Home;
