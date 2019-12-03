import * as React from 'react';

import * as styles from './Header.scss';

import InputBox from "./InputBox";
import LogoBox from "./LogoBox";

import Menu from "./MenuBox";

const Header = () => (
  <div className={styles.header}>
    <div className={`container ${styles.headerBox}`}>
      <LogoBox />
      <InputBox />
      <Menu />
    </div>
  </div>
);

export default Header;
