import * as React from "react";

import "../scss/base.scss";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Content from "./Content.jsx";

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}
export default App;
