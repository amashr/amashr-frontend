import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partnering from './components/Partnering';

class Landing extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Hero />
        <Partnering />
      </Fragment>
    );
  }
}

export default Landing;
