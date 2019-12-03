import * as React from 'react';

import * as styles from './Search.scss';

const Search = () => (
  <>
    <select className={styles.inputSelect} name="" id="">
      <option value="">Wszystkie kategorie</option>
    </select>
    <input
      className={styles.search}
      type="text"
      name=""
      placeholder="Znajdź książkę"
    />
  </>
);

export default Search;
