import * as React from 'react';

import logo from "./images/logo.svg";
import * as styles from './Header.scss';
import Search from '../Search/Search';

const Header = () => (
  <div className={styles.header}>
      <div className="container">
        <img src={logo} alt=""/>
          Biblioteka Szkoły Podstawowej w Pieniężnie
        <Search /> 
      </div>
  </div>
);

export default Header;
