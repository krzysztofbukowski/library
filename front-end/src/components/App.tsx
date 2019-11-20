import * as React from "react";

import "./common-scss/base.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Content from "./content/Content";

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <Header />
        <Content />
        <Footer />
      </div>
    )
  };
};

export default App;
