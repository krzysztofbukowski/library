import * as React from 'react';

import Header from './Header';
import Footer from './Footer';
import Content from './Content';

class App extends React.Component {
  render(): JSX.Element {
    return (
      <>
        <Header />
        <div className="container">
          <Content />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
