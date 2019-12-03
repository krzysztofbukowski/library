import * as React from "react";

import logo from "./logo.svg";

import * as styles from './Logo.scss';

const Logo = () => (
  <img src={logo} alt="" className={styles.logoImg} />
);

export default Logo;
