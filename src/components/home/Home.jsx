import Header from "../header/Header";
import SearchFilter from "../searchFilter/SearchFilter";
import { useContext } from "react";
import { DarkContext } from "../../contextApi";

const Home = () => {
  const dark = useContext(DarkContext);

  return (
    <>
      
      <Header />
      <div className={!dark.state.darkmode ? null : "darkBG"}>
        <SearchFilter />
      </div>
    </>
  );
};

export default Home;
