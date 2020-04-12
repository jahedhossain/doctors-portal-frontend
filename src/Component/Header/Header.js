import React from "react";
import "./Header.css";
import Menu from "./Menu/Menu";
import Banner from "../Banner/Banner";

function Header(props) {
  return (
    <div className="header_top">
      <Menu />
      <Banner handleDate={props.handleDate} />
    </div>
  );
}

export default Header;
