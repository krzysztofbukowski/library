import * as React from 'react';

import * as styles from './Header.scss';

import Menu from "../Menu";
import Search from '../Search';

import logo from "../../assets/logo.svg";

const Header: React.FC = () => (
  <div className={styles.header}>
    <div className={`container ${styles.headerBox}`}>
    <div className={styles.logoBox}>
      <img src={logo} alt="" className={styles.logoImg}/>
      <div className={styles.logoDesc}>
        Biblioteka Szkoły Podstawowej w Pieniężnie
      </div>
    </div>
    <div className={styles.SearchBox}>
      <Search />
    </div>
    <label>Menu
      <Menu />
    </label>
    </div>
  </div>
);

export default Header;
