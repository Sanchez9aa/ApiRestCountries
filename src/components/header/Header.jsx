import "./header.css";
import { useContext } from "react";
import { DarkContext } from "../../contextApi";
import Toggle from "../toggle/Toggle";

const Header = () => {
  const dark = useContext(DarkContext);

  return (
    <div className={!dark.state.darkmode ? "header" : "header darkBG border"}>
      <div className="header-wrapper">
        <h1
          className={
            !dark.state.darkmode ? "header-title" : "header-title darkColor"
          }
        >
          Where in the World
        </h1>
        <Toggle />
      </div>
    </div>
  );
};

export default Header;
