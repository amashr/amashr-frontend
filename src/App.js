import React, { Component, Fragment } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Hero />
      </Fragment>
    );
  }
}

export default App;
