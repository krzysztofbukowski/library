import * as React from "react";

import "../common-scss/base.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Content from "./Content/Content";

class App extends React.Component {
  render(){
    return (
      <>
        <Header />
        <div className="container">
          <Content />
          <Footer />
        </div>
      </>
    )
  };
};

export default App;
