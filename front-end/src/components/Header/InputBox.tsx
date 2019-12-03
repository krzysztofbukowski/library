import * as React from "react"; 

import Search from "../Search/Search"

import styles from "./Header.scss";

const InputBox = () => (
  <div className={styles.inputBox}>
    <Search />
  </div>
);

export default InputBox;
