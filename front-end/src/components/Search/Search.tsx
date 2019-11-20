import * as React from "react";

import * as styles from "./Search.scss"

const Search = () => (
  <input 
    className={styles.search}
    type="text" 
    name="" 
    placeholder="Znajdź swoją ulubioną książkę"
  />
);

export default Search;
