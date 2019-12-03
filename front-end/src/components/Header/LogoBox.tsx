import * as React from "react";

import * as styles from './Header.scss';

import Logo from "../Logo/Logo";

const LogoBox = () => (
  <>
    <Logo />
    <div className={styles.logoBox}>   
      <div className={styles.logoDesc}>
        Biblioteka Szkoły Podstawowej w Pieniężnie
      </div>
    </div>
  </>
);

export default LogoBox;
