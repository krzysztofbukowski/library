import * as React from 'react';

import * as styles from './Header.scss';
import Search from '../Search/Search';

const Header: React.FC = () => (
  <div className={styles.header}>
    <div className={styles.titleBox}>
      <h6 className={styles.title}>
        Biblioteka Szkoły Podstawowej w Pieniężnie
      </h6>
    </div>
    <div className={styles.searchBox}>
      <Search />
    </div>
  </div>
);

export default Header;
