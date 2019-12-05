import * as React from 'react';

import Header from './Header';
import Carousel from './Carousel';
import Content from './Content';
import Footer from './Footer';

class App extends React.Component {
  render(): JSX.Element {
    return (
      <>
        <Header />
        <Carousel />
        <div className="container">
          <Content />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
