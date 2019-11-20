import * as React from "react";

import "./_header.scss";

import Search from "./Search";

const Header = () => (
  <div className="header">
    <div className="header__title-box">
      <h6 className="header__title">Biblioteka Szkoły Podstawowej w Pieniężnie</h6>
    </div>
    <div className="header__search-box">
      <Search />
    </div>
  </div>
);

export default Header;
