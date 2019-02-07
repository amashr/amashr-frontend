import React, { Component, Fragment } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';

class Landing extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Hero />
      </Fragment>
    );
  }
}

export default Landing;
