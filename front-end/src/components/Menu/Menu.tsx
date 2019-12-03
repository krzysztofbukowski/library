import * as React from "react";

import style from "./Menu.scss"; 

const Menu = () => (
  <span>
    <i class={` ${style.icon} fas fa-hamburger`}></i>
  </span>
);

export default Menu;
